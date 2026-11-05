import { Hand, HeartHandshake } from "lucide-react";

export default function YSLInfoCard() {
  return (
    <aside className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
        <Hand size={25} />
      </div>

      <h2 className="text-lg font-bold text-slate-900">
        لغة الإشارة اليمنية
      </h2>

      <p className="mt-3 text-sm leading-8 text-slate-600">
        لغة الإشارة وسيلة تواصل أساسية لمجتمع الصم وضعاف السمع.
        يهدف مشروع ArYSL إلى تسهيل فهم الإشارات اليمنية باستخدام
        تقنيات الذكاء الاصطناعي.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-teal-800">
        <HeartHandshake size={17} />
        معًا نحو تواصل أكثر شمولًا
      </div>
    </aside>
  );
}