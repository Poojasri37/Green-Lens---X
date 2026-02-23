export interface HardwareMetrics {
    cpu_usage: number;
    gpu_usage: number;
    npu_usage: number;
    cpu_power: number;
    gpu_power: number;
    npu_power: number;
    total_power: number;
    carbon_rate: number;
    // Real-data provenance fields
    carbon_country?: string;    // e.g. "Chennai, IN"
    carbon_source?: string;     // e.g. "IEA-2023/IN" or "IEA-global-avg"
    cpu_power_real?: boolean;   // always true (freq-scaled TDP model)
    gpu_real?: boolean;         // true = WMI perf counters, false = simulated
    npu_real?: boolean;         // true = WMI NPU engine found
    timestamp: number;
}

export interface InferenceRun {
    id: string;
    engine: 'CPU' | 'GPU' | 'NPU';
    precision: 'FP32' | 'BF16' | 'INT8';
    latency_ms: number;
    energy_joules: number;
    co2_grams: number;
    throughput_ops: number;
    timestamp: number;
    model: string;
}

export interface GreenScore {
    total: number;
    efficiency: number;
    carbonImpact: number;
    hardwareUtil: number;
    optimizationLevel: number;
}

export interface CoachMessage {
    id: string;
    type: 'warning' | 'tip' | 'success' | 'info';
    title: string;
    body: string;
    action?: string;
    timestamp: number;
}

export type PrecisionMode = 'FP32' | 'BF16' | 'INT8';
export type ExecutionEngine = 'CPU' | 'GPU' | 'NPU';
