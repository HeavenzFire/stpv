
import React from 'react';

interface AxisCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: string;
  statusColor: string;
  details: Record<string, string>;
  children: React.ReactNode;
}

const AxisCard: React.FC<AxisCardProps> = ({ title, subtitle, icon, status, statusColor, details, children }) => {
  return (
    <div className="glass-card rounded-lg p-5 flex flex-col h-full shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-100 font-orbitron">{title}</h2>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        {icon}
      </div>
      <div className="mt-4 text-sm font-semibold flex items-center">
        <span className="relative flex h-3 w-3 mr-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor.replace('text-', 'bg-')} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${statusColor.replace('text-', 'bg-')}`}></span>
        </span>
        <span className={statusColor}>{status}</span>
      </div>
      <div className="my-4 flex-grow">{children}</div>
      <div className="border-t border-gray-700 pt-3 mt-auto">
        <ul className="text-xs space-y-2 font-mono text-gray-400">
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="text-gray-500">{key}:</span>
              <span className="text-gray-200 truncate">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AxisCard;
