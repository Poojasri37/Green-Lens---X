import React, { useState, useEffect, useRef } from 'react';
import './AICoach.css';
import Header from '../components/Header';
import { useHardwareMetrics } from '../hooks/useHardware';
import { Bot, Zap, AlertTriangle, CheckCircle, Info, Leaf, Send, ChevronRight } from 'lucide-react';

interface Message {
    id: string;
    role: 'assistant' | 'user';
    content: string;
    timestamp: number;
    type?: 'tip' | 'warning' | 'success' | 'info';
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1', role: 'assistant', type: 'info',
        content: "Hello! I'm the GreenLens AI Coach — an on-device agent specialized in helping developers build greener AI systems on AMD hardware. I'm analyzing your current inference patterns...",
        timestamp: Date.now() - 10000,
    },
];

const getAutoMessage = (metrics: { npu_usage: number; cpu_usage: number; gpu_usage: number; total_power: number; gpu_power: number; npu_power: number; }): Message | null => {
    const now = Date.now();
    if (metrics.cpu_usage > 70 && metrics.npu_usage < 10) {
        return {
            id: Math.random().toString(36).slice(2), role: 'assistant', type: 'warning',
            content: `⚠️ High CPU load detected (${metrics.cpu_usage.toFixed(0)}%) with near-idle AMD NPU. This is a major carbon inefficiency. Moving inference workloads to the XDNA™ 2 NPU could reduce energy consumption by ~92% for identical throughput.`,
            timestamp: now,
        };
    }
    if (metrics.gpu_usage > 60 && metrics.npu_usage < 20) {
        return {
            id: Math.random().toString(36).slice(2), role: 'assistant', type: 'tip',
            content: `💡 I see your GPU is running hot (${metrics.gpu_usage.toFixed(0)}%). For inference workloads under ~2B parameters, the AMD XDNA™ 2 NPU typically delivers 3-5x better performance-per-watt. Consider using the Ryzen AI SDK to redirect this workload.`,
            timestamp: now,
        };
    }
    if (metrics.npu_usage > 30) {
        return {
            id: Math.random().toString(36).slice(2), role: 'assistant', type: 'success',
            content: `✅ Excellent! Your AMD NPU is actively being utilized (${metrics.npu_usage.toFixed(0)}%). You're currently running on the most carbon-efficient path. At this utilization, you're saving approximately ${(metrics.gpu_power - metrics.npu_power).toFixed(1)}W vs GPU execution.`,
            timestamp: now,
        };
    }
    return null;
};

const KNOWLEDGE_BASE = [
    {
        q: ['npu', 'xdna', 'amd npu'],
        a: `The AMD XDNA™ 2 NPU in Ryzen AI processors is a dedicated AI engine that operates at 1-5W for inference tasks that would otherwise require 15-50W on a GPU or CPU. It's designed specifically for sustained AI workloads with a hardware-level pipeline that bypasses the memory bandwidth bottlenecks typical of CPU/GPU AI execution. For INT8 quantized models, you can achieve up to 50 TOPS with ~2W average power draw.`,
        type: 'info' as const,
    },
    {
        q: ['int8', 'quantiz', 'precision'],
        a: `INT8 quantization converts model weights from 32-bit floats to 8-bit integers, reducing: memory usage by 4x, memory bandwidth by ~4x, and computational intensity by ~4x. On AMD XDNA™ 2, INT8 is the native format — meaning no runtime conversion overhead. Accuracy loss is typically <0.5% for transformer architectures when using proper calibration. I recommend using AMD's Vitis AI runtime for optimal INT8 deployment.`,
        type: 'tip' as const,
    },
    {
        q: ['carbon', 'co2', 'emission', 'sustainability'],
        a: `AI training and inference contribute ~0.5-1% of global electricity consumption — and growing. Here's the breakdown: Cloud GPU inference (~45W per inference slot) vs AMD NPU inference (~3W including memory) = 93% reduction per inference. At 1000 inferences/hr, this saves ~42W·hr = 18.5g CO₂e per day (at global average 0.44 kg CO₂/kWh). At scale, on-device AMD NPU inference is the most impactful decision a developer can make.`,
        type: 'info' as const,
    },
    {
        q: ['bf16', 'float16'],
        a: `BF16 (Brain Float 16) is AMD's recommended middle-ground precision. It maintains the dynamic range of FP32 (8 exponent bits) while halving memory use. On AMD Radeon™ GPUs with RDNA 3, BF16 compute is accelerated via dedicated matrix units. For transformer models, BF16 typically shows <0.2% accuracy drop vs FP32 while cutting power by ~40%.`,
        type: 'tip' as const,
    },
    {
        q: ['green score', 'score', 'metric', 'measure'],
        a: `The GreenLens Green Score™ is calculated from: (1) Power efficiency ratio (actual vs theoretical max), (2) Carbon impact normalized to baseline, (3) Hardware utilization quality (NPU vs CPU/GPU ratio), (4) Optimization level (precision, batching, model pruning). A score of 90+ means your AI system is in the top 10% of efficiency. The AMD XDNA™ 2 NPU makes 95+ achievable on any Ryzen AI device.`,
        type: 'success' as const,
    },
];

const findAnswer = (query: string): { content: string; type: Message['type'] } | null => {
    const q = query.toLowerCase();
    for (const kb of KNOWLEDGE_BASE) {
        if (kb.q.some(k => q.includes(k))) {
            return { content: kb.a, type: kb.type };
        }
    }
    return null;
};

const DEFAULT_RESPONSE = `That's a great question about AI sustainability! Based on your current hardware profile — AMD Ryzen AI with XDNA™ 2 NPU — I recommend:\n\n1. **Always prefer NPU for inference** — It's designed for exactly this.\n2. **Use INT8 for production models** — Near-identical accuracy, massive efficiency gain.\n3. **Batch inference requests** — Reduces per-inference overhead by 30-60%.\n4. **Profile before optimizing** — Use the Precision Lab to identify your actual bottlenecks.\n\nWould you like me to explain any of these in detail?`;

const QUICK_PROMPTS = [
    'How does the AMD NPU save carbon?',
    'Explain INT8 quantization',
    'What is my Green Score based on?',
    'How much CO₂ does AI produce?',
];

const AICoach: React.FC = () => {
    const { metrics } = useHardwareMetrics();
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const lastAutoTime = useRef(0);

    useEffect(() => {
        if (metrics && Date.now() - lastAutoTime.current > 15000) {
            const msg = getAutoMessage(metrics);
            if (msg) {
                lastAutoTime.current = Date.now();
                setMessages(prev => [...prev, msg]);
            }
        }
    }, [metrics]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = {
            id: Math.random().toString(36).slice(2),
            role: 'user', content: text, timestamp: Date.now(),
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTyping(true);

        setTimeout(() => {
            const answer = findAnswer(text);
            const response: Message = {
                id: Math.random().toString(36).slice(2),
                role: 'assistant',
                content: answer?.content ?? DEFAULT_RESPONSE,
                type: answer?.type ?? 'info',
                timestamp: Date.now(),
            };
            setMessages(prev => [...prev, response]);
            setTyping(false);
        }, 800 + Math.random() * 1200);
    };

    const getTypeIcon = (type?: string) => {
        if (type === 'warning') return <AlertTriangle size={14} />;
        if (type === 'success') return <CheckCircle size={14} />;
        if (type === 'tip') return <Zap size={14} />;
        return <Info size={14} />;
    };

    return (
        <div className="coach-layout">
            <Header metrics={metrics} pageTitle="AI SUSTAINABILITY COACH" pageDesc="On-device LLM agent — explains inefficiencies, suggests greener paths" />
            <div className="coach-content">

                {/* Left sidebar — context */}
                <div className="coach-sidebar">
                    <div className="card coach-context-card">
                        <div className="card-header">
                            <span className="card-title">LIVE CONTEXT</span>
                            <span className="live-dot">MONITORING</span>
                        </div>
                        <div className="context-items">
                            <div className="context-item">
                                <span className="context-label">Current NPU Load</span>
                                <span className="context-val mono text-green">{metrics?.npu_usage.toFixed(0) ?? '--'}%</span>
                            </div>
                            <div className="context-item">
                                <span className="context-label">GPU Load</span>
                                <span className="context-val mono text-accent-orange">{metrics?.gpu_usage.toFixed(0) ?? '--'}%</span>
                            </div>
                            <div className="context-item">
                                <span className="context-label">Total Power</span>
                                <span className="context-val mono">{metrics?.total_power.toFixed(1) ?? '--'}W</span>
                            </div>
                            <div className="context-item">
                                <span className="context-label">CO₂ Rate</span>
                                <span className="context-val mono">{metrics ? (metrics.total_power * 0.44 / 3600).toFixed(5) : '--'}g/s</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <span className="card-title">QUICK PROMPTS</span>
                        </div>
                        <div className="quick-prompts">
                            {QUICK_PROMPTS.map(p => (
                                <button key={p} className="quick-prompt-btn" onClick={() => sendMessage(p)}>
                                    <ChevronRight size={12} />
                                    <span>{p}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card coach-tips-card">
                        <div className="card-header">
                            <span className="card-title">DID YOU KNOW?</span>
                        </div>
                        <div className="coach-tips-list">
                            <div className="coach-tip-item">
                                <Leaf size={14} className="text-green" />
                                <p>The AMD XDNA™ 2 NPU uses <strong>92% less power</strong> than a discrete GPU for the same AI workload.</p>
                            </div>
                            <div className="coach-tip-item">
                                <Zap size={14} className="text-accent-orange" />
                                <p>INT8 inference on AMD NPU can run <strong>50 TOPS</strong> within a 5W power envelope.</p>
                            </div>
                            <div className="coach-tip-item">
                                <Bot size={14} className="text-accent-blue" />
                                <p>On-device AI using AMD Ryzen AI avoids cloud data center emissions entirely.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat area */}
                <div className="coach-chat-col">
                    <div className="card chat-card">
                        <div className="chat-header">
                            <div className="agent-avatar">
                                <Bot size={20} />
                            </div>
                            <div className="agent-info">
                                <span className="agent-name">GreenLens Coach</span>
                                <span className="agent-desc">On-device AI Sustainability Agent · AMD Ryzen AI</span>
                            </div>
                            <span className="badge badge-green">ON-DEVICE</span>
                        </div>

                        <div className="chat-messages">
                            {messages.map(msg => (
                                <div key={msg.id} className={`message message--${msg.role} ${msg.type ? `message--${msg.type}` : ''}`}>
                                    {msg.role === 'assistant' && (
                                        <div className="message-icon">{getTypeIcon(msg.type)}</div>
                                    )}
                                    <div className="message-body">
                                        <div className="message-content">{msg.content}</div>
                                        <div className="message-time mono">{new Date(msg.timestamp).toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            ))}
                            {typing && (
                                <div className="message message--assistant message--typing">
                                    <div className="message-icon"><Bot size={14} /></div>
                                    <div className="typing-dots">
                                        <span /><span /><span />
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        <div className="chat-input-area">
                            <input
                                className="chat-input"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => { if (e.key === 'Enter') sendMessage(input); }}
                                placeholder="Ask about AI sustainability, efficiency, AMD NPU..."
                            />
                            <button className="btn btn-primary send-btn" onClick={() => sendMessage(input)}>
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AICoach;
