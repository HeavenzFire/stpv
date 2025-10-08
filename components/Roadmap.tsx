
import React from 'react';
import { CheckCircleIcon } from './Icons';

interface RoadmapProps {
  roadmap: string[];
  kpis: string[];
}

const Roadmap: React.FC<RoadmapProps> = ({ roadmap, kpis }) => {
  return (
    <div className="glass-card rounded-lg p-5 flex flex-col h-full shadow-lg">
      <div>
        <h3 className="font-orbitron text-lg font-bold text-gray-100">ROADMAP & KPIs</h3>
        <p className="text-xs text-gray-400">Syntropic deployment schedule and performance metrics.</p>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div>
          <h4 className="font-semibold text-sm text-cyan-300 mb-2">Deployment Phases</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            {roadmap.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-gray-900 mt-1 mr-3 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-amber-300 mb-2">Key Performance Indicators</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            {kpis.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
