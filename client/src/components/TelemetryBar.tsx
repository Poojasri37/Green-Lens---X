import React from 'react';
import './TelemetryBar.css';
import { useAnimatedValue } from '../hooks/useHardware';

interface TelemetryBarProps {
    label: string;
    sublabel?: string;
    value: number;
    power: number;
    color: 'green' | 'blue' | 'orange' | 'red';
    badge?: string;
    isReal?: boolean;   // true = real hardware data, false = simulated
}

const COLORS = {
    green: 'var(--green-primary)',
    blue: 'var(--blue-accent)',
    orange: 'var(--orange-accent)',
    red: 'var(--red-accent)',
};

const TelemetryBar: React.FC<TelemetryBarProps> = ({
    label, sublabel, value, power, color, badge, isReal
}) => {
    const animVal = useAnimatedValue(value);
    const animPow = useAnimatedValue(power);

    return (
        <div className="telem-bar">
            <div className="telem-header">
                <div className="telem-labels">
                    <span className="telem-label">{label}</span>
                    {sublabel && <span className="telem-sublabel">{sublabel}</span>}
                </div>
                <div className="telem-values">
                    {badge && <span className={`badge badge-${color === 'green' ? 'green' : color === 'blue' ? 'blue' : 'orange'}`}>{badge}</span>}
                    {/* Real / Sim data provenance badge */}
                    {isReal !== undefined && (
                        <span className={`data-source-pill ${isReal ? 'data-source-pill--real' : 'data-source-pill--sim'}`}>
                            {isReal ? '● REAL' : '○ SIM'}
                        </span>
                    )}
                    <span className="telem-percent mono">{animVal.toFixed(0)}%</span>
                    <span className="telem-power mono">{animPow.toFixed(1)}W</span>
                </div>
            </div>
            <div className="progress-track">
                <div
                    className="progress-fill telem-fill"
                    style={{
                        width: `${animVal}%`,
                        background: COLORS[color],
                        boxShadow: color === 'green' ? `0 0 8px ${COLORS.green}` : 'none',
                    }}
                />
            </div>
        </div>
    );
};

export default TelemetryBar;
