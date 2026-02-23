import React from 'react';
import './Header.css';
import { Zap, Leaf, Wifi, WifiOff } from 'lucide-react';
import { HardwareMetrics } from '../types';
import { useAnimatedValue } from '../hooks/useHardware';

interface HeaderProps {
    metrics: HardwareMetrics | null;
    pageTitle: string;
    pageDesc: string;
}

const Header: React.FC<HeaderProps> = ({ metrics, pageTitle, pageDesc }) => {
    const totalPower = useAnimatedValue(metrics?.total_power ?? 0);
    const co2Rate = metrics ? (metrics.total_power * metrics.carbon_rate) / 3600 : 0;

    return (
        <header className="topbar">
            <div className="topbar-left">
                <h1 className="page-title">{pageTitle}</h1>
                <p className="page-desc">{pageDesc}</p>
            </div>

            <div className="topbar-right">
                <div className="stat-chip">
                    <Zap size={12} />
                    <span className="stat-chip-label">POWER</span>
                    <span className="stat-chip-value mono">{totalPower.toFixed(1)}W</span>
                </div>
                <div className="stat-chip stat-chip--green">
                    <Leaf size={12} />
                    <span className="stat-chip-label">CO₂ RATE</span>
                    <span className="stat-chip-value mono">{co2Rate.toFixed(4)}g/s</span>
                </div>
                <div className={`conn-status ${metrics ? 'conn-status--live' : ''}`}>
                    {metrics ? <Wifi size={13} /> : <WifiOff size={13} />}
                    <span>{metrics ? 'LIVE' : 'OFFLINE'}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
