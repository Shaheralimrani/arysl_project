export interface ContributorStat {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: "upload" | "check" | "clock" | "star";
}

export interface Contribution {
  id: number;
  title: string;
  type: "image" | "video";
  submittedAt: string;
  status: "approved" | "pending" | "rejected";
}

export interface ContributorBadge {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}