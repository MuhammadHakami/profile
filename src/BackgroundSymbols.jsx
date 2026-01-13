import React from 'react';

// Saudi Architecture Design System - Vector Assets
// derived from Ministry of Culture architecture regions

export const NajdiSymbol = ({ style, className }) => (
    // The "Crenallation" / Arrow shape common in Najdi parapets
    <svg viewBox="0 0 100 100" style={style} className={className}>
        <path d="M50 0 L100 100 L0 100 Z" fill="currentColor" />
        <path d="M50 25 L85 90 L15 90 Z" fill="var(--bg-color)" /> {/* Inner knockout for depth */}
        <path d="M50 45 L70 80 L30 80 Z" fill="currentColor" />
    </svg>
);

export const AsirSymbol = ({ style, className }) => (
    // The "Rain Steps" / Triangle patterns of Asir/Sarawat
    <svg viewBox="0 0 100 100" style={style} className={className}>
        <rect x="10" y="80" width="80" height="10" fill="currentColor" />
        <rect x="20" y="65" width="60" height="10" fill="currentColor" />
        <rect x="30" y="50" width="40" height="10" fill="currentColor" />
        <rect x="40" y="35" width="20" height="10" fill="currentColor" />
        <path d="M50 10 L60 30 L40 30 Z" fill="currentColor" />
    </svg>
);

export const HejazSymbol = ({ style, className }) => (
    // The "Roshan" / Geometric Rosette of Jeddah/Hejaz
    <svg viewBox="0 0 100 100" style={style} className={className}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M50 5 L50 95" stroke="currentColor" strokeWidth="2" />
        <path d="M5 50 L95 50" stroke="currentColor" strokeWidth="2" />
        <path d="M18 18 L82 82" stroke="currentColor" strokeWidth="2" />
        <path d="M82 18 L18 82" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.5" />
    </svg>
);

export const EasternSymbol = ({ style, className }) => (
    // The "Arch" / Marine influences of Eastern Province
    <svg viewBox="0 0 100 100" style={style} className={className}>
        <path d="M10 90 L10 50 C10 20 90 20 90 50 L90 90 Z" fill="none" stroke="currentColor" strokeWidth="8" />
        <path d="M25 90 L25 55 C25 35 75 35 75 55 L75 90 Z" fill="currentColor" opacity="0.3" />
    </svg>
);

const BackgroundSymbols = () => {
    return (
        <div className="architectural-layer">
            {/* Massive Overlay Symbols */}
            <NajdiSymbol
                style={{ position: 'fixed', top: '-10vh', right: '-10vw', width: '50vw', opacity: 0.03, zIndex: 0 }}
                className="spin-slow"
            />
            <HejazSymbol
                style={{ position: 'fixed', bottom: '-20vh', left: '-15vw', width: '60vw', opacity: 0.04, zIndex: 0 }}
                className="spin-reverse-slow"
            />
            <AsirSymbol
                style={{ position: 'fixed', top: '40vh', right: '10vw', width: '20vw', opacity: 0.02, zIndex: 0 }}
            />
            <EasternSymbol
                style={{ position: 'fixed', bottom: '10vh', right: '30vw', width: '15vw', opacity: 0.02, zIndex: 0 }}
            />
        </div>
    );
};

export default BackgroundSymbols;
