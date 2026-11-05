import Link from "next/link";
import {
  BrainCircuit,
  BookOpen,
  Target,
  ArrowLeft,
} from "lucide-react";

const actions = [
  {
    title: "تجربة التعرف على الإشارات",
    description: "ارفع صورة واختبر نظام التعرف على لغة الإشارة.",
    href: "/predict",
    icon: BrainCircuit,
  },
  {
    title: "استكشاف فئات الإشارات",
    description: "تعرف على الفئات الـ32 الموجودة في النظام.",
    href: "/",
    icon: BookOpen,
  },
];

export default function ContributorActions() {
  return (
    <section>
      <h2 className="mb-4 font-bold text-gray-900">
        إجراءات سريعة
      </h2>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-gray-800">
                  {action.title}
                </h3>

                <p className="mt-1 text-xs leading-6 text-gray-500">
                  {action.description}
                </p>
              </div>

              <ArrowLeft
                size={18}
                className="shrink-0 text-gray-400 transition group-hover:-translate-x-1 group-hover:text-teal-700"
              />
            </Link>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-teal-200 bg-teal-50/50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-teal-800">
          <Target size={17} />
          رفع مساهمة جديدة
        </div>

        <p className="mt-2 text-xs leading-6 text-gray-600">
          ستتم إضافة خاصية رفع الصور والفيديوهات في المرحلة التالية،
          مع إمكانية متابعة حالة مراجعتها.
        </p>
      </div>
    </section>
  );
}