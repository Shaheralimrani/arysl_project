import { ShieldCheck, Camera, UserCheck, Info } from "lucide-react";

const guidelines = [
  {
    icon: Camera,
    title: "وضوح الملفات",
    description: "احرص على وضوح اليدين والحركة والإضاءة.",
  },
  {
    icon: UserCheck,
    title: "الموافقة والخصوصية",
    description: "تأكد من موافقة الأشخاص الظاهرين في الصور والفيديوهات.",
  },
  {
    icon: ShieldCheck,
    title: "دقة الإشارة",
    description: "تأكد من أن المحتوى يمثل الإشارة والفئة المختارة.",
  },
];

export default function ContributionGuidelines() {
  return (
    <section className="rounded-2xl border border-teal-100 bg-teal-50/50 p-5">
      <div className="mb-5 flex items-center gap-2 text-teal-800">
        <Info size={20} />

        <h2 className="font-bold">إرشادات قبل الإرسال</h2>
      </div>

      <div className="space-y-5">
        {guidelines.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700">
                <Icon size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}