export type ContributionFileType = "image" | "video";

export interface ContributionFormData {
  className: string;
  description: string;
  dialect: string;
  files: File[];
}

export interface ClassNeed {
  id: number;
  name: string;
  currentCount: number;
  targetCount: number;
  priority: "high" | "medium" | "low";
}