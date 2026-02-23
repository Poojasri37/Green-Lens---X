import { HardwareMetrics, InferenceRun } from '../types';

type MetricsListener = (metrics: HardwareMetrics) => void;

class HardwareService {
    private ws: WebSocket | null = null;
    private listeners: MetricsListener[] = [];
    private connected = false;
    private simulationInterval: ReturnType<typeof setInterval> | null = null;

    // Simulated historical data
    private history: HardwareMetrics[] = [];
    private inferenceHistory: InferenceRun[] = [];

    connect(url: string = 'ws://localhost:8000/ws') {
        try {
            this.ws = new WebSocket(url);
            this.ws.onmessage = (e) => {
                const data = JSON.parse(e.data) as HardwareMetrics;
                this.history.push(data);
                if (this.history.length > 60) this.history.shift();
                this.listeners.forEach((l) => l(data));
            };
            this.ws.onerror = () => this.startSimulation();
            this.ws.onopen = () => { this.connected = true; };
        } catch {
            this.startSimulation();
        }
    }

    startSimulation() {
        let t = 0;
        this.simulationInterval = setInterval(() => {
            t++;
            const cpuU = 20 + Math.sin(t * 0.05) * 15 + Math.random() * 10;
            const gpuU = 30 + Math.sin(t * 0.03 + 1) * 20 + Math.random() * 15;
            const npuU = 12 + Math.sin(t * 0.07 + 2) * 8 + Math.random() * 5;
            const metrics: HardwareMetrics = {
                cpu_usage: Math.min(100, Math.max(5, cpuU)),
                gpu_usage: Math.min(100, Math.max(5, gpuU)),
                npu_usage: Math.min(100, Math.max(2, npuU)),
                cpu_power: (cpuU * 0.35),
                gpu_power: (gpuU * 0.42),
                npu_power: (npuU * 0.04),
                total_power: (cpuU * 0.35) + (gpuU * 0.42) + (npuU * 0.04),
                carbon_rate: 0.44,
                timestamp: Date.now(),
            };
            this.history.push(metrics);
            if (this.history.length > 120) this.history.shift();
            this.listeners.forEach((l) => l(metrics));
        }, 500);
        this.connected = true;
    }

    subscribe(listener: MetricsListener) {
        this.listeners.push(listener);
        return () => { this.listeners = this.listeners.filter((l) => l !== listener); };
    }

    getHistory() { return this.history; }
    getInferenceHistory() { return this.inferenceHistory; }

    recordInference(run: InferenceRun) {
        this.inferenceHistory.push(run);
        if (this.inferenceHistory.length > 50) this.inferenceHistory.shift();
    }

    isConnected() { return this.connected; }

    disconnect() {
        this.ws?.close();
        if (this.simulationInterval) clearInterval(this.simulationInterval);
    }
}

export const hardwareService = new HardwareService();
