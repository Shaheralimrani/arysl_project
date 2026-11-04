import { Database, Tags, Image, Microscope } from "lucide-react";

const statistics = [
  {
    icon: Tags,
    value: "32",
    label: "فئة إشارية",
  },
  {
    icon: Image,
    value: "24,245",
    label: "صورة في مجموعة البيانات",
  },
  {
    icon: Database,
    value: "ArYSL",
    label: "مجموعة البيانات",
  },
  {
    icon: Microscope,
    value: "AI",
    label: "الذكاء الاصطناعي",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-3xl bg-slate-950 px-8 py-14 shadow-2xl shadow-slate-300/30 sm:px-12">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold text-blue-400">
              خلفية المشروع
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white">
              بيانات تدعم البحث والتطوير
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              تستند أعمال المشروع إلى مجموعة بيانات لغة الإشارة اليمنية
              المستخدمة في تطوير وتجربة تقنيات التعرف.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {statistics.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
                    <Icon size={25} />
                  </div>

                  <p className="text-3xl font-extrabold text-white sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}