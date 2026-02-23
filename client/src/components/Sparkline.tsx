import React, { useMemo } from 'react';

interface SparklineProps {
    data: number[];
    color?: string;
    height?: number;
    width?: number;
    area?: boolean;
    label?: string;
}

const Sparkline: React.FC<SparklineProps> = ({
    data, color = 'var(--green-primary)', height = 60, width = 200, area = true, label
}) => {
    const points = useMemo(() => {
        if (!data.length) return [] as string[];
        const max = Math.max(...data, 1);
        const min = Math.min(...data, 0);
        const range = max - min || 1;
        const step = width / (data.length - 1 || 1);
        return data.map((v, i) => {
            const x = i * step;
            const y = height - ((v - min) / range) * (height - 4) - 2;
            return `${x},${y}`;
        });
    }, [data, width, height]);

    const polyline = points.join(' ');
    const areaPath = points.length > 0
        ? `M ${points[0]} L ${points.join(' L ')} L ${(data.length - 1) * (width / (data.length - 1 || 1))},${height} L 0,${height} Z`
        : '';

    return (
        <div style={{ width, height, position: 'relative' }}>
            {label && (
                <span style={{
                    position: 'absolute', top: 2, left: 4,
                    fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '1px', zIndex: 1
                }}>{label}</span>
            )}
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                <defs>
                    <linearGradient id={`spark-grad-${color.replace(/[^a-z]/g, '')}`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.01" />
                    </linearGradient>
                </defs>
                {area && areaPath && (
                    <path
                        d={areaPath}
                        fill={`url(#spark-grad-${color.replace(/[^a-z]/g, '')})`}
                    />
                )}
                {polyline && (
                    <polyline
                        points={polyline}
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
            </svg>
        </div>
    );
};

export default Sparkline;
