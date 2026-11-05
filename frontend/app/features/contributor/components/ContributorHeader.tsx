import { Bell, CircleHelp } from "lucide-react";

export default function ContributorHeader() {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <span>الرئيسية</span>
          <span>/</span>
          <span className="font-semibold text-teal-700">
            لوحة المساهم
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          لوحة تحكم المساهم
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          تابع مساهماتك وإنجازاتك وساهم في تطوير لغة الإشارة اليمنية.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="الإشعارات"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          aria-label="المساعدة"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
        >
          <CircleHelp size={19} />
        </button>
      </div>
    </div>
  );
}