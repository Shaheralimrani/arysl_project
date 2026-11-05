import WorkspaceShell from "../components/layout/WorkspaceShell";
import ContributionForm from "../features/contributor/components/ContributionForm";

import { HandHeart } from "lucide-react";

export default function ContributePage() {
  return (
    <WorkspaceShell>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-teal-700">
            <HandHeart size={18} />
            مجتمع المساهمين
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            تقديم مساهمة جديدة
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
            ساعدنا في تطوير قاعدة بيانات لغة الإشارة اليمنية عن طريق
            إضافة صور ومقاطع فيديو واضحة ودقيقة للإشارات.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-7 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ContributionForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="font-bold text-gray-900">
                كيف تتم مراجعة مساهمتك؟
              </h2>

              <ol className="mt-5 space-y-5 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">
                    1
                  </span>

                  <span>ترسل الصور أو الفيديوهات مع معلومات الإشارة.</span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">
                    2
                  </span>

                  <span>يقوم فريق المراجعة بفحص جودة المحتوى ودقته.</span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">
                    3
                  </span>

                  <span>بعد القبول، تضاف المساهمة إلى بيانات النظام وتُمنح نقاطها.</span>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-teal-800 to-emerald-700 p-5 text-white">
              <h2 className="font-bold">
                مساهمتك تصنع فرقًا
              </h2>

              <p className="mt-3 text-sm leading-7 text-teal-50">
                كل مساهمة دقيقة تقرّبنا من نظام أفضل للتعرف على لغة
                الإشارة اليمنية وخدمة مجتمع الصم وضعاف السمع.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </WorkspaceShell>
  );
}