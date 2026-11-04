import { Sparkles, ScanFace } from "lucide-react";

export default function PredictionHeader() {
  return (
    <section className="mb-10 text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        <Sparkles size={16} />
        تقنية الذكاء الاصطناعي والرؤية الحاسوبية
      </div>

      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        التعرف على لغة الإشارة
        <span className="mt-2 block text-blue-600">
          اليمنية
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
        ارفع صورة تحتوي على إشارة من لغة الإشارة اليمنية،
        ودع النظام يحللها ويحاول التعرف على معناها.
      </p>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
        <ScanFace size={18} className="text-blue-500" />
        <span>واجهة تجريبية للتعرف على الإشارات</span>
      </div>
    </section>
  );
}