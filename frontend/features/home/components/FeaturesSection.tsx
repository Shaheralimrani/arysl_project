import {
  BrainCircuit,
  Hand,
  Languages,
  Camera,
  Accessibility,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "لغة الإشارة اليمنية",
    description:
      "التركيز على لغة الإشارة اليمنية وتطوير حلول تقنية تراعي خصوصيتها.",
  },
  {
    icon: BrainCircuit,
    title: "الذكاء الاصطناعي",
    description:
      "الاستفادة من نماذج تعلم الآلة للتعرف على أنماط الإشارات وتحليلها.",
  },
  {
    icon: Camera,
    title: "الرؤية الحاسوبية",
    description:
      "معالجة الصور واستخراج المعلومات البصرية اللازمة للتعرف على الإشارات.",
  },
  {
    icon: Languages,
    title: "دعم التواصل",
    description:
      "المساهمة في تقليل الحواجز اللغوية بين مستخدمي لغة الإشارة وغيرهم.",
  },
  {
    icon: Accessibility,
    title: "سهولة الوصول",
    description:
      "المساهمة في بناء تجربة تقنية أكثر شمولًا وإتاحة للجميع.",
  },
  {
    icon: Cpu,
    title: "التطوير المستمر",
    description:
      "بنية قابلة للتطوير تسمح بإضافة إمكانيات وتحسينات مستقبلية.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold text-blue-600">
            إمكانيات المنصة
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            التكنولوجيا لخدمة التواصل
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            نجمع بين تقنيات الذكاء الاصطناعي والرؤية الحاسوبية
            لبناء تجربة تقنية تدعم التعرف على لغة الإشارة اليمنية.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-8 text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}