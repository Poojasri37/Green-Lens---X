import { useState, useEffect, useRef } from 'react';
import { HardwareMetrics } from '../types';
import { hardwareService } from '../services/hardwareService';

export function useHardwareMetrics() {
    const [metrics, setMetrics] = useState<HardwareMetrics | null>(null);
    const [history, setHistory] = useState<HardwareMetrics[]>([]);

    useEffect(() => {
        if (!hardwareService.isConnected()) {
            hardwareService.startSimulation();
        }
        const unsub = hardwareService.subscribe((m) => {
            setMetrics(m);
            setHistory([...hardwareService.getHistory()]);
        });
        return unsub;
    }, []);

    return { metrics, history };
}

export function useAnimatedValue(target: number, duration = 400) {
    const [value, setValue] = useState(target);
    const ref = useRef(target);

    useEffect(() => {
        const start = ref.current;
        const diff = target - start;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            ref.current = start + diff * eased;
            setValue(ref.current);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [target, duration]);

    return value;
}

export function useGreenScore(metrics: HardwareMetrics | null) {
    if (!metrics) return { total: 0, efficiency: 0, carbonImpact: 0, hardwareUtil: 0, optimizationLevel: 0 };

    const npuRatio = metrics.npu_power / (metrics.total_power + 0.001);
    const powerEfficiency = Math.max(0, 100 - metrics.total_power);
    const carbonImpact = Math.max(0, 100 - (metrics.total_power * metrics.carbon_rate * 10));
    const hardwareUtil = (metrics.npu_usage + metrics.gpu_usage * 0.3) / 1.3;
    const optimizationLevel = npuRatio * 100;

    const total = Math.round(
        powerEfficiency * 0.3 +
        carbonImpact * 0.3 +
        Math.min(hardwareUtil, 100) * 0.2 +
        optimizationLevel * 0.2
    );

    return {
        total: Math.min(99, Math.max(10, total)),
        efficiency: Math.min(100, powerEfficiency),
        carbonImpact: Math.min(100, carbonImpact),
        hardwareUtil: Math.min(100, hardwareUtil),
        optimizationLevel: Math.min(100, optimizationLevel),
    };
}
