
export interface PlaybookData {
  high_level_strategy: string[];
  systems: Record<string, { goal: string; stack: string; }>;
  roadmap: string[];
  kpis: string[];
  constraints: string[];
  ethical_foundation: string;
  forensic_hash: string;
}

export interface IngestLog {
  id: number;
  hash: string;
  status: 'Ingesting' | 'Hashing' | 'Committing' | 'Pinned' | 'Complete';
  flagged: boolean;
  source: string;
}
