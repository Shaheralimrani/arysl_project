import { Bell, CircleHelp } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="mb-2 text-sm font-medium text-teal-700">
          مساحة المستخدم
        </p>

        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          لوحة التحكم
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          تابع نشاطك واستخدم خدمات لغة الإشارة اليمنية.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="الإشعارات"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-teal-500" />
        </button>

        <button
          type="button"
          aria-label="المساعدة"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
        >
          <CircleHelp size={19} />
        </button>
      </div>
    </div>
  );
}