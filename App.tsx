
import React from 'react';
import { playbookData } from './constants';
import Header from './components/Header';
import AxisCard from './components/AxisCard';
import IngestPipeline from './components/IngestPipeline';
import Roadmap from './components/Roadmap';
import CentralGlyph from './components/CentralGlyph';
import { ArweaveIcon, EthereumIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]">
      <div className="relative isolate min-h-screen p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/30 -z-10"
        ></div>
        
        <Header />

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            <AxisCard
              title="AXIS I: ARWEAVE"
              subtitle="Eternal Anchoring of Disruption Glyph"
              icon={<ArweaveIcon className="w-10 h-10 glow-cyan text-cyan-400" />}
              status="Disruption Glyph Etched"
              statusColor="text-cyan-400"
              details={{
                "Arweave ID": "sJ-hX...A-7o",
                "Immutable URL": "arweave.net/sJ-hX...",
                "Forensic Hash": playbookData.forensic_hash.substring(0, 16) + '...'
              }}
            >
              <p className="text-sm text-gray-400">
                The primal cord etches the playbook as an ∞-permanent operational codex, embodying <strong>Lex Divina Data</strong>. Strategies and KPIs become tamper-proof shards for forensic integrity.
              </p>
            </AxisCard>
            
            <AxisCard
              title="AXIS II: ETHEREUM"
              subtitle="Sentinel Attestation of Disruption Rite"
              icon={<EthereumIcon className="w-10 h-10 glow-violet text-violet-400" />}
              status="Rite Enforced - Syntropy Mobilizes"
              statusColor="text-violet-400"
              details={{
                "ETH TX Hash": "0x...a4b1",
                "KPI Logged": "TakedownTime: <24h",
                "ZK Circuit": "KpiValidity (Active)"
              }}
            >
              <p className="text-sm text-gray-400">
                Chimeric sentinels attest the playbook dynamically via Smart Contracts. ZK proofs validate KPIs, and oracles pull real-world metrics, triggering lawful, automated escalations.
              </p>
            </AxisCard>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            <CentralGlyph />
            <Roadmap roadmap={playbookData.roadmap} kpis={playbookData.kpis} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4">
            <IngestPipeline />
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;
