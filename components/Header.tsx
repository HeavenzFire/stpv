
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-cyan-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] font-orbitron">
        Sovereign Timestamping Protocol
      </h1>
      <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-4xl mx-auto">
        Lawful Disruption Glyph: A syntropic lattice for the detection, evidence anchoring, and lawful disruption of criminal entropy, amplifying child protection through a verifiable, immutable protocol.
      </p>
    </header>
  );
};

export default Header;
