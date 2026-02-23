
// THREE.JS SCENE SETUP
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// LIGHTING
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x00ff66, 2, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// COMPONENTS (METAPHORS)
// Central "AI Galaxy"
const galaxyGeometry = new THREE.IcosahedronGeometry(2, 1);
const galaxyMaterial = new THREE.MeshPhongMaterial({
    color: 0x00ff66,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
scene.add(galaxy);

// Energy Particles System
const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3);
const speeds = new Float32Array(particlesCount);
for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    speeds[i] = Math.random() * 0.05;
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({ color: 0x00ff66, size: 0.05, transparent: true, opacity: 0.8 });
const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particleSystem);

camera.position.z = 8;

function animate() {
    requestAnimationFrame(animate);
    galaxy.rotation.y += 0.005;
    galaxy.rotation.x += 0.002;

    // Animate particles flowing towards center
    const pos = particleSystem.geometry.attributes.position.array;
    for (let i = 0; i < particlesCount; i++) {
        pos[i * 3] *= 0.99;
        pos[i * 3 + 1] *= 0.99;
        pos[i * 3 + 2] *= 0.99;

        // Reset particles that hit center
        if (Math.abs(pos[i * 3]) < 0.1) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}
animate();

// WEBSOCKET DATA BINDING
const ws = new WebSocket(`ws://${location.host}/ws`);
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updateUI(data);
};

function updateUI(data) {
    // Basic stats
    document.getElementById('total-power').textContent = `${(data.cpu_power + data.gpu_power + data.npu_power).toFixed(1)}W`;
    document.getElementById('cpu-percent').textContent = `${Math.round(data.cpu_usage)}%`;
    document.getElementById('gpu-percent').textContent = `${Math.round(data.gpu_usage)}%`;
    document.getElementById('npu-percent').textContent = `${Math.round(data.npu_usage)}%`;

    // Progress bars
    document.getElementById('cpu-fill').style.width = `${data.cpu_usage}%`;
    document.getElementById('gpu-fill').style.width = `${data.gpu_usage}%`;
    document.getElementById('npu-fill').style.width = `${data.npu_usage}%`;

    // Carbon Radar
    const co2 = (data.cpu_power + data.gpu_power + data.npu_power) * 0.44 / 1000;
    document.getElementById('co2-value').textContent = `${co2.toFixed(4)}g`;

    // Green Score simulation logic
    const score = calculateScore(data);
    document.getElementById('score-num').textContent = score;
    document.getElementById('score-fill').setAttribute('stroke-dasharray', `${score}, 100`);

    // Update particle speed based on NPU usage (Visual Meta-feedback)
    particlesMaterial.color.setHex(data.npu_usage > 10 ? 0x00ff66 : 0x4facfe);
}

function calculateScore(data) {
    // Higher NPU vs GPU/CPU ratio = higher score
    const ratio = data.npu_usage / (data.cpu_usage + data.gpu_usage + 1);
    let score = 70 + (ratio * 50);
    return Math.min(Math.round(score), 99);
}

// UI INTERACTIONS
window.setPrecision = (p) => {
    const btns = document.querySelectorAll('.precision-lab .buttons:first-of-type button');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    updateCoach(p);
};

window.setEngine = (e) => {
    const btns = document.querySelectorAll('.precision-lab .buttons:last-of-type button');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (e === 'NPU') {
        gsap.to(galaxyMaterial, { opacity: 0.8, duration: 1 });
        gsap.to(pointLight, { intensity: 5, duration: 1 });
    } else {
        gsap.to(galaxyMaterial, { opacity: 0.2, duration: 1 });
        gsap.to(pointLight, { intensity: 1, duration: 1 });
    }
};

const coachMessages = [
    "Switching to AMD NPU has reduced thermal throttling by 15%.",
    "Carbon emissions dropped significantly after moving the inference to XDNA 2.",
    "INT8 quantization is recommended for this model to maximize efficiency.",
    "Your current model architecture is highly optimized for edge execution."
];

function updateCoach(precision) {
    const text = document.getElementById('coach-text');
    if (precision === 'FP32') {
        text.textContent = "Warning: FP32 on CPU is causing high energy spikes. Consider BF16 or INT8 on NPU.";
    } else if (precision === 'INT8') {
        text.textContent = "Excellent choice. INT8 on XDNA 2 NPU is the optimal green path for this workload.";
    }
}

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
