import {
  Camera,
  BrainCircuit,
  MessageSquareText,
  ArrowLeft,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "إدخال الإشارة",
    description:
      "يبدأ المستخدم بتقديم الصورة أو المدخل البصري الذي يرغب في التعرف عليه.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "تحليل الإشارة",
    description:
      "تتم معالجة المدخلات باستخدام تقنيات الرؤية الحاسوبية ونموذج التعرف.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "عرض النتيجة",
    description:
      "تُعرض الفئة أو النتيجة التي يتعرف عليها النظام للمستخدم.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold text-blue-600">
            آلية العمل
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            كيف تعمل المنصة؟
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            تصور مبسط للمراحل الأساسية في عملية التعرف على الإشارة.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-4xl font-black text-blue-100">
                      {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-8 text-slate-500">
                    {step.description}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <ArrowLeft
                    className="absolute -left-5 top-1/2 z-10 hidden -translate-y-1/2 text-blue-300 md:block"
                    size={28}
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}