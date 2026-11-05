import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  available: boolean;
}

export interface PredictionRecord {
  id: string;
  predictedText: string;
  confidence: number;
  date: string;
  status: "success" | "failed";
}