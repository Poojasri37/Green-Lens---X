import React, { useState, useRef } from 'react';
import './CarbonDiff.css';
import Header from '../components/Header';
import { useHardwareMetrics } from '../hooks/useHardware';
import type { PrecisionMode, ExecutionEngine } from '../types';
import { Play, ArrowRight, TrendingDown, Leaf } from 'lucide-react';

const ENGINE_CONFIG = {
    CPU: { powerMult: 4.5, latencyMult: 4.2, color: 'var(--blue-accent)' },
    GPU: { powerMult: 3.0, latencyMult: 1.5, color: 'var(--orange-accent)' },
    NPU: { powerMult: 0.08, latencyMult: 1.0, color: 'var(--green-primary)' },
};
const PREC_CONFIG = {
    FP32: { powerMult: 1.0, latencyMult: 1.8 },
    BF16: { powerMult: 0.55, latencyMult: 1.1 },
    INT8: { powerMult: 0.22, latencyMult: 0.6 },
};

// ── Per-model realistic base values ──────────────────────────────────────────
// basePower: FP32 on GPU reference (Watts)
// baseLatency: FP32 on GPU reference (ms per inference)
// Source: MLPerf v3.1 / published benchmarks, rounded for clarity
const MODEL_PROFILES: Record<string, { basePower: number; baseLatency: number; params: string; task: string }> = {
    'ResNet-50': { basePower: 3.5, baseLatency: 8, params: '25 M', task: 'Image Classification' },
    'BERT-Base': { basePower: 6.0, baseLatency: 45, params: '110 M', task: 'NLP / Text Encoding' },
    'YOLOv8-nano': { basePower: 1.8, baseLatency: 5, params: '3.2 M', task: 'Real-time Detection' },
    'Whisper-small': { basePower: 5.2, baseLatency: 280, params: '244 M', task: 'Audio Transcription' },
    'Stable Diffusion v1.5': { basePower: 14.0, baseLatency: 4800, params: '860 M', task: 'Image Generation' },
    'LLaMA 3 8B': { basePower: 18.5, baseLatency: 12000, params: '8 B', task: 'Text Generation' },
    'MobileNetV3': { basePower: 0.9, baseLatency: 3, params: '5.4 M', task: 'Mobile Classification' },
};

interface RunConfig {
    engine: ExecutionEngine;
    precision: PrecisionMode;
    model: string;
    label: string;
}

const DEFAULTS: [RunConfig, RunConfig] = [
    { engine: 'CPU', precision: 'FP32', model: 'BERT-Base', label: 'RUN A — LEGACY' },
    { engine: 'NPU', precision: 'INT8', model: 'BERT-Base', label: 'RUN B — AMD NPU' },
];

const calcStats = (cfg: RunConfig, carbonRate = 0.44) => {
    const profile = MODEL_PROFILES[cfg.model] ?? { basePower: 3.5, baseLatency: 28 };
    const power = profile.basePower * ENGINE_CONFIG[cfg.engine].powerMult * PREC_CONFIG[cfg.precision].powerMult;
    const latency = profile.baseLatency * ENGINE_CONFIG[cfg.engine].latencyMult * PREC_CONFIG[cfg.precision].latencyMult;
    const co2 = (power * carbonRate) / 3600;
    const throughput = latency > 0 ? Math.round(1000 / latency) : 0;
    const effScore = power > 0 ? Math.round(throughput / power * 10) : 0;
    return { power, latency, co2, throughput, effScore };
};

const MODELS = Object.keys(MODEL_PROFILES);
const ENGINES: ExecutionEngine[] = ['CPU', 'GPU', 'NPU'];
const PRECISIONS: PrecisionMode[] = ['FP32', 'BF16', 'INT8'];

const CarbonDiff: React.FC = () => {
    const { metrics } = useHardwareMetrics();
    const [runA, setRunA] = useState<RunConfig>(DEFAULTS[0]);
    const [runB, setRunB] = useState<RunConfig>(DEFAULTS[1]);
    const [replaying, setReplaying] = useState(false);
    const [replayProg, setReplayProg] = useState({ a: 0, b: 0 });
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const carbonRate = metrics?.carbon_rate ?? 0.49;
    const statsA = calcStats(runA, carbonRate);
    const statsB = calcStats(runB, carbonRate);

    const powerSaving = ((statsA.power - statsB.power) / statsA.power * 100);
    const latencySaving = ((statsA.latency - statsB.latency) / statsA.latency * 100);
    const co2Saving = ((statsA.co2 - statsB.co2) / statsA.co2 * 100);

    const startReplay = () => {
        setReplaying(true);
        setReplayProg({ a: 0, b: 0 });
        let pa = 0, pb = 0;
        timerRef.current = setInterval(() => {
            pa += 100 / (statsA.latency / 30);
            pb += 100 / (statsB.latency / 30);
            setReplayProg({ a: Math.min(pa, 100), b: Math.min(pb, 100) });
            if (pa >= 100 && pb >= 100) {
                clearInterval(timerRef.current!);
                setReplaying(false);
            }
        }, 30);
    };

    const ConfigPanel = ({ run, setRun, side }: { run: RunConfig; setRun: (r: RunConfig) => void; side: 'a' | 'b' }) => {
        const color = side === 'a' ? 'var(--red-accent)' : 'var(--green-primary)';
        const profile = MODEL_PROFILES[run.model];
        return (
            <div className="diff-config-panel">
                <div className="diff-config-label" style={{ color }}>{run.label}</div>
                <select className="diff-select" value={run.engine} onChange={e => setRun({ ...run, engine: e.target.value as ExecutionEngine })}>
                    {ENGINES.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
                <select className="diff-select" value={run.precision} onChange={e => setRun({ ...run, precision: e.target.value as PrecisionMode })}>
                    {PRECISIONS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select className="diff-select" value={run.model} onChange={e => setRun({ ...run, model: e.target.value })}>
                    {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                {profile && (
                    <div className="diff-model-meta">
                        <span className="diff-model-task">{profile.task}</span>
                        <span className="diff-model-params">{profile.params} params</span>
                    </div>
                )}
            </div>
        );
    };

    const fmtVal = (v: number, unit: string) => {
        // Auto-convert ms → s for very large latency values
        if (unit === 'ms' && v >= 1000) return `${(v / 1000).toFixed(2)}s`;
        if (v < 0.001 && v !== 0) return v.toExponential(2) + unit;
        if (v < 1) return v.toFixed(4) + unit;
        return v.toFixed(1) + unit;
    };

    const StatRow = ({ label, a, b, unit, isLower }: { label: string; a: number; b: number; unit: string; isLower: boolean }) => {
        const better = isLower ? b < a : b > a;
        const maxV = Math.max(a, b, 0.001);
        const deltaA = a !== 0 ? Math.abs(isLower ? ((a - b) / a * 100) : ((b - a) / a * 100)) : 0;
        return (
            <div className="stat-row">
                <div className="stat-row-label">{label}</div>
                <div className="stat-row-bars">
                    <div className="stat-bar-container side-a">
                        <span className="stat-bar-val mono a-val">{fmtVal(a, unit)}</span>
                        <div className="stat-bar-track">
                            <div className="stat-bar-fill fill-a" style={{ width: `${(a / maxV) * 100}%` }} />
                        </div>
                    </div>
                    <div className="stat-arrow"><ArrowRight size={14} /></div>
                    <div className="stat-bar-container side-b">
                        <div className="stat-bar-track">
                            <div className={`stat-bar-fill ${better ? 'fill-b-better' : 'fill-b-worse'}`} style={{ width: `${(b / maxV) * 100}%` }} />
                        </div>
                        <span className="stat-bar-val mono b-val">{fmtVal(b, unit)}</span>
                    </div>
                </div>
                <div className="stat-delta" style={{ color: better ? 'var(--green-primary)' : 'var(--red-accent)' }}>
                    {better ? '▼' : '▲'} {deltaA.toFixed(0)}%
                </div>
            </div>
        );
    };

    return (
        <div className="diff-layout">
            <Header metrics={metrics} pageTitle="CARBON DIFF MODE" pageDesc="Side-by-side AI run comparison — visualize the cost of optimization" />
            <div className="diff-content">

                {/* Config row */}
                <div className="card diff-config-card">
                    <div className="card-header">
                        <span className="card-title">CONFIGURE COMPARISON</span>
                        <button className="btn btn-primary" onClick={startReplay} disabled={replaying}>
                            <Play size={14} />
                            {replaying ? 'REPLAYING...' : 'REPLAY & COMPARE'}
                        </button>
                    </div>
                    <div className="diff-config-row">
                        <ConfigPanel run={runA} setRun={setRunA} side="a" />
                        <div className="diff-vs">VS</div>
                        <ConfigPanel run={runB} setRun={setRunB} side="b" />
                    </div>

                    {/* Replay bars */}
                    {(replaying || replayProg.a > 0) && (
                        <div className="replay-section">
                            <div className="replay-track-row">
                                <span className="replay-label a-label">{runA.engine}/{runA.precision}</span>
                                <div className="replay-track">
                                    <div className="replay-fill replay-fill-a" style={{ width: `${replayProg.a}%` }} />
                                </div>
                                <span className="replay-pct mono">{replayProg.a.toFixed(0)}%</span>
                            </div>
                            <div className="replay-track-row">
                                <span className="replay-label b-label">{runB.engine}/{runB.precision}</span>
                                <div className="replay-track">
                                    <div className="replay-fill replay-fill-b" style={{ width: `${replayProg.b}%` }} />
                                </div>
                                <span className="replay-pct mono">{replayProg.b.toFixed(0)}%</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Side by side charts */}
                <div className="diff-main">
                    <div className="diff-compare-col">
                        <div className="card diff-metrics-card">
                            <div className="card-header">
                                <span className="card-title">METRIC COMPARISON</span>
                            </div>
                            <div className="stat-section-header">
                                <span className="a-label" style={{ color: 'var(--red-accent)' }}>{runA.label} ({runA.engine}/{runA.precision})</span>
                                <span className="b-label" style={{ color: 'var(--green-primary)' }}>{runB.label} ({runB.engine}/{runB.precision})</span>
                            </div>
                            <div className="stat-rows">
                                <StatRow label="Power Draw" a={statsA.power} b={statsB.power} unit="W" isLower={true} />
                                <StatRow label="Inference Latency" a={statsA.latency} b={statsB.latency} unit="ms" isLower={true} />
                                <StatRow label="CO₂ Emission Rate" a={statsA.co2} b={statsB.co2} unit="g/s" isLower={true} />
                                <StatRow label="Throughput" a={statsA.throughput} b={statsB.throughput} unit="/s" isLower={false} />
                                <StatRow label="Efficiency Score" a={statsA.effScore} b={statsB.effScore} unit="pts" isLower={false} />
                            </div>
                        </div>
                    </div>

                    {/* Impact summary */}
                    <div className="diff-summary-col">
                        <div className={`card diff-highlight-card ${co2Saving > 0 ? 'diff-highlight--positive' : 'diff-highlight--negative'}`}>
                            <div className="card-header">
                                <span className="card-title">IMPACT SUMMARY</span>
                                <TrendingDown size={20} className="text-green" />
                            </div>

                            <div className="savings-grid">
                                <div className="saving-item">
                                    <div className="saving-pct" style={{ color: powerSaving > 0 ? 'var(--green-primary)' : 'var(--red-accent)' }}>
                                        {powerSaving > 0 ? '-' : '+'}{Math.abs(powerSaving).toFixed(0)}%
                                    </div>
                                    <div className="saving-label">POWER SAVINGS</div>
                                    <div className="saving-abs mono">{statsA.power.toFixed(1)}W → {statsB.power.toFixed(1)}W</div>
                                </div>
                                <div className="saving-item">
                                    <div className="saving-pct" style={{ color: latencySaving > 0 ? 'var(--green-primary)' : 'var(--red-accent)' }}>
                                        {latencySaving > 0 ? '-' : '+'}{Math.abs(latencySaving).toFixed(0)}%
                                    </div>
                                    <div className="saving-label">LATENCY DIFF</div>
                                    <div className="saving-abs mono">{statsA.latency.toFixed(0)}ms → {statsB.latency.toFixed(0)}ms</div>
                                </div>
                                <div className="saving-item col-span-2">
                                    <div className="saving-pct large" style={{ color: co2Saving > 0 ? 'var(--green-primary)' : 'var(--red-accent)' }}>
                                        {co2Saving > 0 ? '-' : '+'}{Math.abs(co2Saving).toFixed(0)}%
                                    </div>
                                    <div className="saving-label">CARBON REDUCTION</div>
                                    <div className="saving-abs mono">{statsA.co2.toFixed(6)}g/s → {statsB.co2.toFixed(6)}g/s</div>
                                </div>
                            </div>

                            {co2Saving > 0 && (
                                <div className="green-badge-big">
                                    <Leaf size={18} />
                                    <span>Switching from <strong>{runA.engine}/{runA.precision}</strong> to <strong>{runB.engine}/{runB.precision}</strong> saves approximately <strong>{co2Saving.toFixed(0)}% carbon emissions</strong> per inference on AMD hardware.</span>
                                </div>
                            )}

                            {/* Hour/day projections */}
                            <div className="projections">
                                <div className="proj-header">ANNUAL SAVINGS PROJECTION (1000 inferences/hr)</div>
                                <div className="proj-grid">
                                    <div className="proj-item">
                                        <span className="proj-label">Hourly CO₂ saved</span>
                                        <span className="proj-val mono text-green">{Math.max(0, (statsA.co2 - statsB.co2) * 1000 * 3600).toFixed(2)}g</span>
                                    </div>
                                    <div className="proj-item">
                                        <span className="proj-label">Daily CO₂ saved</span>
                                        <span className="proj-val mono text-green">{Math.max(0, (statsA.co2 - statsB.co2) * 1000 * 86400).toFixed(0)}g</span>
                                    </div>
                                    <div className="proj-item">
                                        <span className="proj-label">Yearly CO₂ saved</span>
                                        <span className="proj-val mono text-green">{Math.max(0, (statsA.co2 - statsB.co2) * 1000 * 86400 * 365 / 1000).toFixed(2)}kg</span>
                                    </div>
                                    <div className="proj-item">
                                        <span className="proj-label">Equivalent power saved</span>
                                        <span className="proj-val mono text-green">{Math.max(0, statsA.power - statsB.power).toFixed(1)}W avg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarbonDiff;
