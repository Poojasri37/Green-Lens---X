import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
    Activity, Cpu, GitCompare, Bot, Award, GitBranch, Settings
} from 'lucide-react';

const navItems = [
    { to: '/repo', icon: GitBranch, label: 'Repo Connect' },
    { to: '/', icon: Activity, label: 'Carbon Radar', exact: true },
    { to: '/precision', icon: Cpu, label: 'Precision Lab' },
    { to: '/diff', icon: GitCompare, label: 'Carbon Diff' },
    { to: '/coach', icon: Bot, label: 'AI Coach' },
    { to: '/score', icon: Award, label: 'Green Score™' },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-icon">
                    <span className="logo-leaf">🌿</span>
                </div>
                <div className="logo-text">
                    <span className="logo-name"><span className="logo-accent">GREEN</span>LENS</span>
                    <span className="logo-version">X · AMD SLINGSHOT</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map(({ to, icon: Icon, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? 'nav-item--active' : ''}`
                        }
                    >
                        <span className="nav-icon"><Icon size={16} /></span>
                        <span className="nav-label">{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="hw-indicator">
                    <span className="hw-dot hw-dot--npu" />
                    <span className="hw-text">AMD XDNA™ 2 NPU</span>
                    <span className="hw-status">READY</span>
                </div>
                <button className="nav-item nav-item--settings">
                    <span className="nav-icon"><Settings size={16} /></span>
                    <span className="nav-label">Settings</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
