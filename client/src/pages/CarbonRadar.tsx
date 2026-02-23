import React, { useMemo, useRef } from 'react';
import './CarbonRadar.css';
import Header from '../components/Header';
import EnergyGlobe from '../components/EnergyGlobe';
import TelemetryBar from '../components/TelemetryBar';
import Sparkline from '../components/Sparkline';
import { useHardwareMetrics, useAnimatedValue } from '../hooks/useHardware';
import { Zap, Leaf, Cpu, Thermometer, Activity } from 'lucide-react';

const CarbonRadar: React.FC = () => {
    const { metrics, history } = useHardwareMetrics();

    const co2Rate = metrics ? (metrics.total_power * metrics.carbon_rate) / 3600 : 0;
    const animCo2 = useAnimatedValue(co2Rate * 10000);

    const cpuHistory = useMemo(() => history.map(h => h.cpu_usage), [history]);
    const gpuHistory = useMemo(() => history.map(h => h.gpu_usage), [history]);
    const npuHistory = useMemo(() => history.map(h => h.npu_usage), [history]);
    const powerHistory = useMemo(() => history.map(h => h.total_power), [history]);

    const runningCo2 = useRef(0);
    if (metrics) runningCo2.current += co2Rate * 0.5;

    const latency = useMemo(() => {
        if (!metrics) return 0;
        // Simulated latency based on load
        return Math.round(5 + metrics.cpu_usage * 0.5 + metrics.gpu_usage * 0.2);
    }, [metrics]);

    return (
        <div className="radar-layout">
            <Header
                metrics={metrics}
                pageTitle="LIVE AI CARBON RADAR"
                pageDesc="Real-time per-inference energy & carbon impact"
            />
            <div className="radar-content">

                {/* LEFT: 3D Globe */}
                <div className="radar-globe-col">
                    <div className="card globe-card">
                        <div className="card-header">
                            <span className="card-title">AI ENERGY FIELD</span>
                            <span className="live-dot">LIVE</span>
                        </div>
                        <div className="globe-container">
                            <EnergyGlobe
                                npuUsage={metrics?.npu_usage ?? 0}
                                totalPower={metrics?.total_power ?? 0}
                            />
                        </div>
                        <div className="globe-overlay-stats">
                            <div className="overlay-stat">
                                <Zap size={14} className="text-green" />
                                <div>
                                    <div className="overlay-val mono text-green">{metrics?.total_power.toFixed(1) ?? '0.0'}W</div>
                                    <div className="overlay-label">TOTAL POWER</div>
                                </div>
                            </div>
                            <div className="overlay-divider" />
                            <div className="overlay-stat">
                                <Leaf size={14} className="text-accent-orange" />
                                <div>
                                    <div className="overlay-val mono text-accent-orange">{(runningCo2.current).toFixed(4)}g</div>
                                    <div className="overlay-label">CUMUL. CO₂e</div>
                                </div>
                            </div>
                            <div className="overlay-divider" />
                            <div className="overlay-stat">
                                <Activity size={14} className="text-accent-blue" />
                                <div>
                                    <div className="overlay-val mono text-accent-blue">{latency}ms</div>
                                    <div className="overlay-label">EST. LATENCY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER: Key Metrics */}
                <div className="radar-center-col">
                    {/* Hero CO2 card */}
                    <div className="card co2-hero-card">
                        <div className="card-header">
                            <span className="card-title">CARBON EMISSION RATE</span>
                            <span className="badge badge-green">REAL-TIME</span>
                        </div>
                        <div className="co2-display">
                            <div className="co2-unit-top">g CO₂e·s⁻¹</div>
                            <div className="co2-number">
                                <span className="co2-int mono">{co2Rate.toFixed(4)}</span>
                            </div>
                            <div className="co2-equiv">
                                ≈ {(co2Rate * 3600).toFixed(3)}g per hour · {(co2Rate * 86400).toFixed(2)}g per day
                            </div>
                        </div>
                        <div className="co2-spark-row">
                            <Sparkline data={powerHistory} color="var(--green-primary)" height={48} width={320} label="POWER DRAW TREND" />
                        </div>
                    </div>

                    {/* NPU efficiency hero */}
                    <div className="card npu-hero-card glass-accent">
                        <div className="card-header">
                            <span className="card-title">AMD XDNA™ 2 NPU STATUS</span>
                            <span className="badge badge-green">ACTIVE</span>
                        </div>
                        <div className="npu-stat-row">
                            <div className="npu-big-stat">
                                <span className="value-large text-green-glow">{metrics?.npu_usage.toFixed(0) ?? '0'}%</span>
                                <span className="npu-stat-label">UTILIZATION</span>
                            </div>
                            <div className="npu-big-stat">
                                <span className="value-large text-green">{metrics?.npu_power.toFixed(1) ?? '0.0'}W</span>
                                <span className="npu-stat-label">POWER DRAW</span>
                            </div>
                            <div className="npu-efficiency-badge">
                                <span className="eff-num">92%</span>
                                <span className="eff-label">LESS POWER vs GPU</span>
                            </div>
                        </div>
                        <Sparkline data={npuHistory} color="var(--green-primary)" height={36} width={400} label="NPU UTILIZATION HISTORY" />
                    </div>

                    {/* Inference stats */}
                    <div className="radar-stat-grid">
                        <div className="card mini-stat-card">
                            <Cpu size={18} className="text-accent-blue" />
                            <div className="mini-stat-val mono">{(metrics?.cpu_power ?? 0).toFixed(0)}W</div>
                            <div className="mini-stat-label">CPU POWER</div>
                        </div>
                        <div className="card mini-stat-card">
                            <Zap size={18} className="text-accent-orange" />
                            <div className="mini-stat-val mono">{(metrics?.gpu_power ?? 0).toFixed(0)}W</div>
                            <div className="mini-stat-label">GPU POWER</div>
                        </div>
                        <div className="card mini-stat-card glass-accent">
                            <Leaf size={18} className="text-green" />
                            <div className="mini-stat-val mono text-green">{(metrics?.npu_power ?? 0).toFixed(1)}W</div>
                            <div className="mini-stat-label">NPU POWER</div>
                        </div>
                        <div className="card mini-stat-card">
                            <Thermometer size={18} className="text-accent-red" />
                            <div className="mini-stat-val mono">{((metrics?.total_power ?? 0) * (metrics?.carbon_rate ?? 0.49) * 1000 / 3600).toFixed(2)}mg/s</div>
                            <div className="mini-stat-label">CARBON RATE</div>
                            {metrics?.carbon_country && (
                                <div className="mini-stat-source" title={metrics.carbon_source}>
                                    📍 {metrics.carbon_country}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Telemetry */}
                <div className="radar-right-col">
                    <div className="card telemetry-card">
                        <div className="card-header">
                            <span className="card-title">HARDWARE TELEMETRY</span>
                            <span className="live-dot">STREAMING</span>
                        </div>
                        <TelemetryBar
                            label="AMD Ryzen™ CPU"
                            sublabel="Zen 5 Architecture"
                            value={metrics?.cpu_usage ?? 0}
                            power={metrics?.cpu_power ?? 0}
                            color="blue"
                            isReal={true}
                        />
                        <TelemetryBar
                            label="AMD Radeon™ GPU"
                            sublabel="RDNA 3 Architecture"
                            value={metrics?.gpu_usage ?? 0}
                            power={metrics?.gpu_power ?? 0}
                            color="orange"
                            isReal={metrics?.gpu_real}
                        />
                        <TelemetryBar
                            label="AMD XDNA™ 2 NPU"
                            sublabel="Dedicated AI Engine"
                            value={metrics?.npu_usage ?? 0}
                            power={metrics?.npu_power ?? 0}
                            color="green"
                            badge="OPTIMAL"
                            isReal={metrics?.npu_real}
                        />
                    </div>

                    <div className="card sparklines-card">
                        <div className="card-header">
                            <span className="card-title">UTILIZATION HISTORY</span>
                        </div>
                        <div className="spark-row">
                            <span className="section-label text-accent-blue">CPU</span>
                            <Sparkline data={cpuHistory} color="var(--blue-accent)" height={40} width={170} />
                        </div>
                        <div className="spark-row">
                            <span className="section-label text-accent-orange">GPU</span>
                            <Sparkline data={gpuHistory} color="var(--orange-accent)" height={40} width={170} />
                        </div>
                        <div className="spark-row">
                            <span className="section-label text-green">NPU</span>
                            <Sparkline data={npuHistory} color="var(--green-primary)" height={40} width={170} />
                        </div>
                    </div>

                    <div className="card carbon-budget-card">
                        <div className="card-header">
                            <span className="card-title">SESSION CARBON BUDGET</span>
                        </div>
                        <div className="budget-display">
                            <div className="budget-value mono">{runningCo2.current.toFixed(4)}<span className="budget-unit">g CO₂e</span></div>
                            <div className="budget-desc">accumulated this session</div>
                        </div>
                        <div className="budget-compare">
                            <div className="budget-compare-item">
                                <span className="label">Cloud GPU equivalent</span>
                                <span className="val mono text-accent-red">{(runningCo2.current * 8.2).toFixed(2)}g</span>
                            </div>
                            <div className="budget-compare-item">
                                <span className="label">Trees needed to offset</span>
                                <span className="val mono text-accent-orange">{(runningCo2.current / 21000).toFixed(8)}</span>
                            </div>
                            <div className="budget-compare-item">
                                <span className="label">AMD NPU savings vs GPU</span>
                                <span className="val mono text-green">-{(runningCo2.current * 7.2).toFixed(2)}g</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarbonRadar;
