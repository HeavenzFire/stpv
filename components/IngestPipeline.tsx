import React, { useState, useEffect, useRef } from 'react';
import type { IngestLog } from '../types';
import { GitIcon, IpfsIcon, CheckCircleIcon, AlertTriangleIcon } from './Icons';

const IngestPipeline: React.FC = () => {
  const [logs, setLogs] = useState<IngestLog[]>([]);
  const [content, setContent] = useState('');
  const [source, setSource] = useState('public_marketplace');
  const [phone, setPhone] = useState('');
  const logContainerRef = useRef<HTMLDivElement>(null);

  const getNextStatus = (currentStatus: IngestLog['status']): IngestLog['status'] | null => {
    switch (currentStatus) {
      case 'Ingesting': return 'Hashing';
      case 'Hashing': return 'Committing';
      case 'Committing': return 'Pinned';
      case 'Pinned': return 'Complete';
      default: return null;
    }
  };

  // Effect to process existing logs
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev =>
        prev.map(log => {
          if (log.status !== 'Complete' && Math.random() > 0.4) {
            const nextStatus = getNextStatus(log.status);
            if (nextStatus) {
              return { ...log, status: nextStatus };
            }
          }
          return log;
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if(logContainerRef.current){
        logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !source.trim()) return;

    const newLog: IngestLog = {
        id: (logs[logs.length - 1]?.id || 0) + 1,
        hash: (Math.random() + 1).toString(36).substring(2, 10),
        status: 'Ingesting',
        flagged: phone.trim().length > 5, // As per user's python logic
        source: source.trim(),
    };
    
    setLogs(prev => {
        const updatedLogs = [...prev, newLog];
        if (updatedLogs.length > 50) return updatedLogs.slice(-50);
        return updatedLogs;
    });

    setContent('');
    setPhone('');
  };


  const StatusIndicator: React.FC<{ status: IngestLog['status'], current: IngestLog['status'] }> = ({ status, current }) => {
    const statusOrder: IngestLog['status'][] = ['Ingesting', 'Hashing', 'Committing', 'Pinned', 'Complete'];
    const currentIndex = statusOrder.indexOf(current);
    const thisIndex = statusOrder.indexOf(status);
    const isActive = currentIndex >= thisIndex;

    return (
        <div className={`w-1/5 h-1 rounded-full transition-colors duration-500 ${isActive ? 'bg-amber-400' : 'bg-gray-600'}`}></div>
    );
  };

  return (
    <div className="glass-card rounded-lg p-5 flex flex-col h-[90vh] max-h-[calc(100vh-4rem)] shadow-lg">
      <h3 className="font-orbitron text-lg font-bold text-gray-100">INGEST & MANIFEST RITE</h3>
      <p className="text-xs text-gray-400 mb-4">Live feed of ingested artifacts, hashed and anchored for forensic integrity.</p>
      
      <div ref={logContainerRef} className="flex-grow overflow-y-auto pr-2 space-y-3 font-mono text-xs">
        {logs.map(log => (
          <div key={log.id} className={`p-2 rounded border transition-all duration-300 ${log.flagged ? 'border-red-500/50 bg-red-900/20' : 'border-gray-700 bg-gray-800/30'}`}>
            <div className="flex justify-between items-center mb-2">
                <div>
                    <span className="text-gray-500">HASH:</span>
                    <span className="text-amber-300 ml-2">{log.hash}</span>
                </div>
                {log.flagged && <AlertTriangleIcon className="w-4 h-4 text-red-400 glow-red" />}
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-20">{log.status}...</span>
                <div className="flex w-full space-x-1">
                    <StatusIndicator status="Ingesting" current={log.status} />
                    <StatusIndicator status="Hashing" current={log.status} />
                    <StatusIndicator status="Committing" current={log.status} />
                    <StatusIndicator status="Pinned" current={log.status} />
                    <StatusIndicator status="Complete" current={log.status} />
                </div>
            </div>
             {log.status === 'Complete' && (
                <div className="flex items-center text-green-400 mt-2 text-xs">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    <span>Evidence Anchored</span>
                    <GitIcon className="w-3 h-3 ml-auto mr-1 text-gray-500" />
                    <IpfsIcon className="w-3 h-3 text-gray-500" />
                </div>
            )}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4 border-t border-gray-700/50 pt-4 flex-shrink-0">
         <h4 className="font-orbitron text-base font-bold text-gray-100 mb-2">Manual Ingest</h4>
         <div className="space-y-3">
            <div>
                 <label htmlFor="content" className="block text-xs text-gray-400 mb-1">Content (Scraped Ad Text)</label>
                 <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter evidence content..."
                    rows={3}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded px-3 py-2 text-xs text-gray-200 focus:ring-1 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition-colors"
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label htmlFor="source" className="block text-xs text-gray-400 mb-1">Source</label>
                    <input
                        id="source"
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        placeholder="e.g., public_marketplace"
                        className="w-full bg-gray-900/50 border border-gray-600 rounded px-3 py-2 text-xs text-gray-200 focus:ring-1 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition-colors"
                        required
                    />
                 </div>
                 <div>
                    <label htmlFor="phone" className="block text-xs text-gray-400 mb-1">Phone (Optional Flag Trigger)</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number to flag"
                        className="w-full bg-gray-900/50 border border-gray-600 rounded px-3 py-2 text-xs text-gray-200 focus:ring-1 focus:ring-amber-400 focus:border-amber-400 focus:outline-none transition-colors"
                    />
                </div>
            </div>
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded font-orbitron tracking-wider transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" disabled={!content || !source}>
                Initiate Ingest Rite
            </button>
         </div>
      </form>

    </div>
  );
};

export default IngestPipeline;
