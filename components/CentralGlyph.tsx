
import React from 'react';

const CentralGlyph: React.FC = () => {
  return (
    <div className="glass-card rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-lg">
       <h3 className="font-orbitron text-lg font-bold text-gray-100 mb-2">PROTECTIVE WEAVE</h3>
       <p className="text-xs text-center text-gray-400 mb-4">Arweave strategy codexes the rite; Ethereum sentinels enforce outcomes.</p>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Glow Filters */}
        <defs>
          <filter id="glow-arweave" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-ethereum" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
           <filter id="glow-ingest" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines */}
        <path d="M 50 150 Q 100 160 150 150" stroke="#f59e0b" strokeWidth="1" fill="none" className="flow-line" />
        <path d="M 150 150 Q 170 100 100 50" stroke="#8b5cf6" strokeWidth="1" fill="none" className="flow-line" style={{animationDelay: '0.5s'}} />
        <path d="M 100 50 Q 30 100 50 150" stroke="#06b6d4" strokeWidth="1" fill="none" className="flow-line" style={{animationDelay: '1s'}}/>

        {/* Center Node */}
        <g transform="translate(100, 115)">
            <circle cx="0" cy="0" r="18" fill="#111827" stroke="#a78bfa" strokeWidth="1" />
            <text x="0" y="2" textAnchor="middle" fill="#e5e7eb" fontSize="8" className="font-orbitron">GRID</text>
        </g>
        
        {/* Top Node - Ethereum */}
        <g transform="translate(100, 50)" className="pulse">
          <circle cx="0" cy="0" r="15" fill="#111827" stroke="#8b5cf6" strokeWidth="1.5" style={{ filter: 'url(#glow-ethereum)' }} />
          <text x="0" y="2" textAnchor="middle" fill="#c4b5fd" fontSize="6">ETH</text>
        </g>

        {/* Bottom Left Node - Arweave */}
        <g transform="translate(50, 150)" className="pulse" style={{animationDelay: '1s'}}>
          <circle cx="0" cy="0" r="15" fill="#111827" stroke="#06b6d4" strokeWidth="1.5" style={{ filter: 'url(#glow-arweave)' }}/>
          <text x="0" y="2" textAnchor="middle" fill="#67e8f9" fontSize="6">AR</text>
        </g>
        
        {/* Bottom Right Node - Ingest */}
        <g transform="translate(150, 150)" className="pulse" style={{animationDelay: '0.5s'}}>
          <circle cx="0" cy="0" r="15" fill="#111827" stroke="#f59e0b" strokeWidth="1.5" style={{ filter: 'url(#glow-ingest)' }}/>
          <text x="0" y="2" textAnchor="middle" fill="#fcd34d" fontSize="6">INGEST</text>
        </g>
      </svg>
    </div>
  );
};

export default CentralGlyph;
