import React, { useState, useEffect, useRef } from 'react';
import './PrecisionLab.css';
import Header from '../components/Header';
import Sparkline from '../components/Sparkline';
import { useHardwareMetrics } from '../hooks/useHardware';
import { hardwareService } from '../services/hardwareService';
import { PrecisionMode, ExecutionEngine, InferenceRun } from '../types';
import { Cpu, Zap, Leaf, Play, StopCircle, ChevronRight } from 'lucide-react';

const ENGINE_CONFIG = {
    CPU: { color: 'var(--blue-accent)', powerMult: 1, latencyMult: 4, label: 'AMD Ryzen™ CPU', sublabel: 'Zen 5 Cores' },
    GPU: { color: 'var(--orange-accent)', powerMult: 3, latencyMult: 1.5, label: 'AMD Radeon™ GPU', sublabel: 'RDNA 3 Compute' },
    NPU: { color: 'var(--green-primary)', powerMult: 0.08, latencyMult: 1, label: 'AMD XDNA™ 2 NPU', sublabel: 'Dedicated AI Engine' },
};

const PRECISION_CONFIG = {
    FP32: { powerMult: 1, latencyMult: 1.8, accuracyScore: 100, label: 'Full Precision (32-bit float)' },
    BF16: { powerMult: 0.55, latencyMult: 1.1, accuracyScore: 99.2, label: 'Brain Float 16' },
    INT8: { powerMult: 0.22, latencyMult: 0.6, accuracyScore: 97.8, label: '8-bit Integer Quantization' },
};

const MODELS = ['ResNet-50', 'BERT-Base', 'YOLOv8-nano', 'Whisper-small', 'Stable Diffusion'];

const PrecisionLab: React.FC = () => {
    const { metrics } = useHardwareMetrics();
    const [precision, setPrecision] = useState<PrecisionMode>('FP32');
    const [engine, setEngine] = useState<ExecutionEngine>('NPU');
    const [model, setModel] = useState(MODELS[0]);
    const [running, setRunning] = useState(false);
    const [runs, setRuns] = useState<InferenceRun[]>([]);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const currentEng = ENGINE_CONFIG[engine];
    const currentPrec = PRECISION_CONFIG[precision];

    const basePower = 3.5;
    const estimatedPower = basePower * currentEng.powerMult * currentPrec.powerMult;
    const estimatedLatency = 28 * currentEng.latencyMult * currentPrec.latencyMult;
    const estimatedCo2 = estimatedPower * 0.44 / 3600;
    const throughput = Math.round(1000 / estimatedLatency);

    const startRun = () => {
        setRunning(true);
        setProgress(0);
        let p = 0;
        intervalRef.current = setInterval(() => {
            p += 5 + Math.random() * 8;
            setProgress(Math.min(p, 100));
            if (p >= 100) {
                clearInterval(intervalRef.current!);
                const run: InferenceRun = {
                    id: Math.random().toString(36).slice(2),
                    engine,
                    precision,
                    latency_ms: estimatedLatency * (0.9 + Math.random() * 0.2),
                    energy_joules: estimatedPower * estimatedLatency / 1000,
                    co2_grams: estimatedCo2 * estimatedLatency / 1000,
                    throughput_ops: throughput,
                    timestamp: Date.now(),
                    model,
                };
                hardwareService.recordInference(run);
                setRuns(prev => [run, ...prev].slice(0, 20));
                setRunning(false);
                setProgress(0);
            }
        }, 80);
    };

    useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

    const latencyHistory = runs.slice().reverse().map(r => r.latency_ms);
    const powerHistory = runs.slice().reverse().map(r => r.energy_joules * 1000);

    return (
        <div className="prec-layout">
            <Header metrics={metrics} pageTitle="PRECISION TOGGLE LAB" pageDesc="Compare CPU vs GPU vs NPU across FP32, BF16, INT8" />
            <div className="prec-content">

                {/* Config Panel */}
                <div className="prec-left">
                    <div className="card">
                        <div className="card-header">
                            <span className="card-title">MODEL SELECTION</span>
                        </div>
                        <div className="model-list">
                            {MODELS.map(m => (
                                <button
                                    key={m}
                                    className={`model-btn ${model === m ? 'model-btn--active' : ''}`}
                                    onClick={() => setModel(m)}
                                >
                                    <ChevronRight size={12} />
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <span className="card-title">PRECISION MODE</span>
                        </div>
                        <div className="precision-selector">
                            {(['FP32', 'BF16', 'INT8'] as PrecisionMode[]).map(p => (
                                <button
                                    key={p}
                                    className={`prec-btn ${precision === p ? 'prec-btn--active' : ''}`}
                                    onClick={() => setPrecision(p)}
                                >
                                    <span className="prec-btn-name">{p}</span>
                                    <span className="prec-btn-desc">{PRECISION_CONFIG[p].label}</span>
                                    <span className="prec-btn-power">{Math.round(PRECISION_CONFIG[p].powerMult * 100)}% power</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <span className="card-title">EXECUTION ENGINE</span>
                        </div>
                        <div className="engine-selector">
                            {(['CPU', 'GPU', 'NPU'] as ExecutionEngine[]).map(e => {
                                const cfg = ENGINE_CONFIG[e];
                                return (
                                    <button
                                        key={e}
                                        className={`engine-btn ${engine === e ? 'engine-btn--active' : ''}`}
                                        style={engine === e ? { borderColor: cfg.color, boxShadow: `0 0 15px ${cfg.color}30` } : {}}
                                        onClick={() => setEngine(e)}
                                    >
                                        <span className="engine-dot" style={{ background: cfg.color }} />
                                        <div className="engine-info">
                                            <span className="engine-name" style={engine === e ? { color: cfg.color } : {}}>{e}</span>
                                            <span className="engine-sub">{cfg.sublabel}</span>
                                        </div>
                                        <span className="engine-power-tag">{cfg.powerMult < 1 ? `${Math.round(cfg.powerMult * 100)}%` : `${cfg.powerMult}x`}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Live Preview */}
                <div className="prec-center">
                    <div className="card estimate-card">
                        <div className="card-header">
                            <span className="card-title">PROJECTED IMPACT — {model} / {precision} / {engine}</span>
                            <span className="badge" style={{ background: `${currentEng.color}20`, color: currentEng.color, border: `1px solid ${currentEng.color}40` }}>{engine} SELECTED</span>
                        </div>
                        <div className="estimate-grid">
                            <div className="estimate-item">
                                <div className="estimate-val mono" style={{ color: currentEng.color }}>{estimatedPower.toFixed(2)}W</div>
                                <div className="estimate-label">EST. POWER</div>
                                <div className="estimate-bar">
                                    <div className="estimate-fill" style={{ width: `${Math.min(estimatedPower / 50 * 100, 100)}%`, background: currentEng.color }} />
                                </div>
                            </div>
                            <div className="estimate-item">
                                <div className="estimate-val mono">{estimatedLatency.toFixed(0)}ms</div>
                                <div className="estimate-label">LATENCY</div>
                                <div className="estimate-bar">
                                    <div className="estimate-fill" style={{ width: `${Math.min(estimatedLatency / 200 * 100, 100)}%`, background: 'var(--blue-accent)' }} />
                                </div>
                            </div>
                            <div className="estimate-item">
                                <div className="estimate-val mono text-green">{estimatedCo2.toFixed(6)}g/s</div>
                                <div className="estimate-label">CO₂ RATE</div>
                                <div className="estimate-bar">
                                    <div className="estimate-fill" style={{ width: `${Math.min(estimatedCo2 * 1000000, 100)}%`, background: 'var(--orange-accent)' }} />
                                </div>
                            </div>
                            <div className="estimate-item">
                                <div className="estimate-val mono">{throughput} op/s</div>
                                <div className="estimate-label">THROUGHPUT</div>
                                <div className="estimate-bar">
                                    <div className="estimate-fill" style={{ width: `${Math.min(throughput / 500 * 100, 100)}%`, background: 'var(--purple-accent)' }} />
                                </div>
                            </div>
                        </div>

                        {/* Comparison vs CPU baseline */}
                        <div className="vs-section">
                            <div className="vs-label">vs CPU+FP32 baseline</div>
                            <div className="vs-grid">
                                <div className="vs-item">
                                    <span className="vs-key">Power Savings</span>
                                    <span className="vs-val mono text-green">
                                        -{Math.round((1 - (currentEng.powerMult * currentPrec.powerMult)) * 100)}%
                                    </span>
                                </div>
                                <div className="vs-item">
                                    <span className="vs-key">Latency Change</span>
                                    <span className={`vs-val mono ${currentEng.latencyMult * currentPrec.latencyMult < 1 ? 'text-green' : 'text-accent-orange'}`}>
                                        {currentEng.latencyMult * currentPrec.latencyMult < 1 ? '-' : '+'}{Math.abs(Math.round((1 - currentEng.latencyMult * currentPrec.latencyMult) * 100))}%
                                    </span>
                                </div>
                                <div className="vs-item">
                                    <span className="vs-key">Carbon Reduction</span>
                                    <span className="vs-val mono text-green">
                                        -{Math.round((1 - (currentEng.powerMult * currentPrec.powerMult)) * 100)}%
                                    </span>
                                </div>
                                <div className="vs-item">
                                    <span className="vs-key">Accuracy</span>
                                    <span className="vs-val mono">{currentPrec.accuracyScore}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Run button */}
                        <div className="run-section">
                            {running ? (
                                <div className="run-progress">
                                    <div className="run-bar"><div className="run-fill" style={{ width: `${progress}%`, background: currentEng.color }} /></div>
                                    <span className="run-pct mono">{progress.toFixed(0)}%</span>
                                </div>
                            ) : null}
                            <button
                                className="btn btn-primary run-btn"
                                onClick={startRun}
                                disabled={running}
                                style={{ background: running ? 'var(--bg-elevated)' : currentEng.color, color: running ? 'var(--text-muted)' : 'var(--bg-void)' }}
                            >
                                {running ? <StopCircle size={16} /> : <Play size={16} />}
                                {running ? 'RUNNING INFERENCE...' : `RUN ON ${engine}`}
                            </button>
                        </div>
                    </div>

                    {/* Side-by-side comparison */}
                    <div className="card comparison-matrix">
                        <div className="card-header">
                            <span className="card-title">ENGINE COMPARISON MATRIX</span>
                        </div>
                        <table className="comp-table">
                            <thead>
                                <tr>
                                    <th>Engine</th>
                                    <th>Power</th>
                                    <th>Latency</th>
                                    <th>CO₂/s</th>
                                    <th>Ops/s</th>
                                    <th>Efficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(['CPU', 'GPU', 'NPU'] as ExecutionEngine[]).map(e => {
                                    const ec = ENGINE_CONFIG[e];
                                    const pc = PRECISION_CONFIG[precision];
                                    const pw = basePower * ec.powerMult * pc.powerMult;
                                    const lt = 28 * ec.latencyMult * pc.latencyMult;
                                    const c2 = pw * 0.44 / 3600;
                                    const tp = Math.round(1000 / lt);
                                    const eff = Math.round(tp / pw);
                                    return (
                                        <tr key={e} className={e === engine ? 'comp-row--active' : ''}>
                                            <td>
                                                <span className="engine-tag" style={{ color: ec.color }}>
                                                    <span className="engine-dot small" style={{ background: ec.color }} />
                                                    {e}
                                                </span>
                                            </td>
                                            <td className="mono">{pw.toFixed(1)}W</td>
                                            <td className="mono">{lt.toFixed(0)}ms</td>
                                            <td className="mono">{c2.toFixed(6)}g</td>
                                            <td className="mono">{tp}</td>
                                            <td>
                                                <div className="eff-bar">
                                                    <div className="eff-fill" style={{ width: `${Math.min(eff / 100, 100)}%`, background: ec.color }} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Run History */}
                <div className="prec-right">
                    <div className="card run-history-card">
                        <div className="card-header">
                            <span className="card-title">RUN HISTORY</span>
                            <span className="badge badge-green">{runs.length} RUNS</span>
                        </div>
                        {runs.length === 0 && (
                            <div className="empty-runs">
                                <Cpu size={32} style={{ opacity: 0.2 }} />
                                <p>No runs yet. Configure and run an inference above.</p>
                            </div>
                        )}
                        <div className="run-list">
                            {runs.map(r => (
                                <div key={r.id} className="run-item">
                                    <div className="run-header">
                                        <span className="run-engine-tag" style={{ color: ENGINE_CONFIG[r.engine].color }}>{r.engine}</span>
                                        <span className="badge" style={{ background: `${ENGINE_CONFIG[r.engine].color}15`, color: ENGINE_CONFIG[r.engine].color, border: `1px solid ${ENGINE_CONFIG[r.engine].color}30` }}>{r.precision}</span>
                                        <span className="run-model">{r.model}</span>
                                        <span className="run-time mono">{new Date(r.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="run-stats">
                                        <span className="run-stat"><span className="label">Lat</span><span className="val mono">{r.latency_ms.toFixed(0)}ms</span></span>
                                        <span className="run-stat"><span className="label">Energy</span><span className="val mono">{r.energy_joules.toFixed(4)}J</span></span>
                                        <span className="run-stat"><span className="label">CO₂</span><span className="val mono text-green">{r.co2_grams.toFixed(6)}g</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {runs.length > 1 && (
                        <div className="card">
                            <div className="card-header">
                                <span className="card-title">LATENCY TREND</span>
                            </div>
                            <Sparkline data={latencyHistory} color="var(--blue-accent)" height={60} width={250} />
                            <div className="card-header" style={{ marginTop: 16 }}>
                                <span className="card-title">ENERGY TREND (mJ)</span>
                            </div>
                            <Sparkline data={powerHistory} color="var(--orange-accent)" height={60} width={250} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrecisionLab;
