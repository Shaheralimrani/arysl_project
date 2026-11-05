import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

import type { QuickAction } from "../types/dashboard.types";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({
  action,
}: QuickActionCardProps) {
  const Icon = action.icon;

  const content = (
    <div
      className={`flex h-full items-center gap-4 rounded-2xl border bg-white p-5 transition ${
        action.available
          ? "border-slate-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
          : "border-slate-100 opacity-70"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon size={23} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-slate-900">
          {action.title}
        </h3>

        <p className="mt-1 text-xs leading-6 text-slate-500">
          {action.description}
        </p>
      </div>

      {action.available ? (
        <ArrowLeft size={19} className="shrink-0 text-teal-700" />
      ) : (
        <Lock size={17} className="shrink-0 text-slate-400" />
      )}
    </div>
  );

  if (!action.available) {
    return <div>{content}</div>;
  }

  return (
    <Link href={action.href} className="block">
      {content}
    </Link>
  );
}