import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface EnergyGlobeProps {
    npuUsage: number;
    totalPower: number;
}

const EnergyGlobe: React.FC<EnergyGlobeProps> = ({ npuUsage, totalPower }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        frameId: number;
        core: THREE.Mesh;
        outerRing: THREE.Mesh;
        particles: THREE.Points;
        particlePositions: Float32Array;
    } | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const el = mountRef.current;
        const w = el.clientWidth, h = el.clientHeight;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        el.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 200);
        camera.position.set(0, 0, 8);

        // Ambient + point lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));
        const greenLight = new THREE.PointLight(0x00e665, 5, 30);
        greenLight.position.set(3, 3, 3);
        scene.add(greenLight);
        const blueLight = new THREE.PointLight(0x4facfe, 2, 30);
        blueLight.position.set(-3, -2, -3);
        scene.add(blueLight);

        // Core energy sphere
        const coreGeo = new THREE.IcosahedronGeometry(1.5, 4);
        const coreMat = new THREE.MeshPhongMaterial({
            color: 0x00e665,
            emissive: 0x003311,
            wireframe: false,
            transparent: true,
            opacity: 0.35,
            shininess: 120,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Wireframe outer
        const outerGeo = new THREE.IcosahedronGeometry(2, 1);
        const outerMat = new THREE.MeshPhongMaterial({
            color: 0x00e665,
            wireframe: true,
            transparent: true,
            opacity: 0.12,
        });
        const outerRing = new THREE.Mesh(outerGeo, outerMat);
        scene.add(outerRing);

        // Particles - energy field
        const count = 400;
        const particlePositions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // sphere distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2.5 + Math.random() * 3;
            particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            particlePositions[i * 3 + 2] = r * Math.cos(phi);
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const pMat = new THREE.PointsMaterial({ color: 0x00e665, size: 0.04, transparent: true, opacity: 0.7 });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        let frameId = 0;
        let t = 0;
        const animate = () => {
            t += 0.01;
            frameId = requestAnimationFrame(animate);
            core.rotation.y += 0.006;
            core.rotation.x += 0.002;
            outerRing.rotation.y -= 0.004;
            outerRing.rotation.z += 0.003;
            particles.rotation.y += 0.001;

            // Breathe with power level
            const breath = 1 + Math.sin(t * 2) * 0.03;
            core.scale.setScalar(breath);

            renderer.render(scene, camera);
        };
        animate();

        sceneRef.current = { renderer, scene, camera, frameId, core, outerRing, particles, particlePositions };

        const onResize = () => {
            const w2 = el.clientWidth, h2 = el.clientHeight;
            camera.aspect = w2 / h2;
            camera.updateProjectionMatrix();
            renderer.setSize(w2, h2);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(frameId);
            el.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    // Reactively update based on props
    useEffect(() => {
        if (!sceneRef.current) return;
        const { core, outerRing, particles } = sceneRef.current;
        const intensity = npuUsage / 100;
        (core.material as THREE.MeshPhongMaterial).opacity = 0.2 + intensity * 0.5;
        (outerRing.material as THREE.MeshPhongMaterial).opacity = 0.05 + intensity * 0.15;
        const color = intensity > 0.5 ? 0x00e665 : 0x4facfe;
        (particles.material as THREE.PointsMaterial).color.setHex(color);
    }, [npuUsage, totalPower]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default EnergyGlobe;
