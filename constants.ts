import { PlaybookData } from './types';

export const playbookData: PlaybookData = {
  "high_level_strategy": [
    "Detect early: Multi-source signals for patterns.",
    "Collect evidence: Immutable timestamps.",
    "Choke economics: Cut rails lawfully.",
    "Automate takedowns: API workflows.",
    "Protect victims: Safe channels.",
    "Scale partnerships: NGOs, processors.",
    "Measure: Arrests, rescues, reductions."
  ],
  "systems": {
    "1_anomaly_fusion": {"goal": "Correlate signals", "stack": "Kafka → Elasticsearch → ML"},
    // FIX: Renamed "tooling" to "stack" to conform to the PlaybookData type.
    "2_evidence_ledger": {"goal": "Court-admissible", "stack": "Git + IPFS + GPG"},
    // FIX: Renamed "partners" to "stack" to conform to the PlaybookData type.
    "3_financial_choke": {"goal": "Freeze flows", "stack": "Exchanges, banks"},
    "4_takedown_automation": {"goal": "Real-time removal", "stack": "FastAPI + Celery"},
    // FIX: Renamed "tech" to "stack" to conform to the PlaybookData type.
    "5_marketplace_monitoring": {"goal": "Poison reputation", "stack": "Browser extensions"},
    // FIX: Renamed "novel" to "stack" to conform to the PlaybookData type.
    "6_victim_rescue": {"goal": "Safe transitions", "stack": "QR one-time auth"},
    "7_intel_sharing": {"goal": "Shared dashboard", "stack": "OpenCTI + OPA"}
  },
  "roadmap": [
    "Days 0-7: POC ingest pipeline.",
    "Weeks 2-4: MVP alerting + templates.",
    "Months 1-3: GNN + integrations.",
    "Months 3-6: Coalition automation."
  ],
  "kpis": [
    "Takedown time: <24h",
    "Evidence yield: ≥20%",
    "Frozen rails: Quarterly count",
    "Victims safe: Confirmed referrals",
    "Re-listing reduction: % drop"
  ],
  "constraints": [
    "MoUs with LE/NGOs required.",
    "Legal counsel for data/GDPR.",
    "No entrapment—authorized only."
  ],
  "ethical_foundation": "Lawful amplification of justice—syntropy for the vulnerable.",
  "forensic_hash": "c5a0f8b1e2d3c4a5b6f7e8d9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9" // Example hash
};
