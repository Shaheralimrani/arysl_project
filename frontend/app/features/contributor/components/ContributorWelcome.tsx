import Link from "next/link";
import { ArrowLeft, HandHeart, Sparkles } from "lucide-react";

export default function ContributorWelcome() {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-l from-teal-800 via-teal-700 to-emerald-600 p-6 text-white shadow-lg shadow-teal-900/10 sm:p-9">
      <div className="absolute -left-12 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative z-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <Sparkles size={16} />
            <span>أنت جزء من التغيير</span>
          </div>

          <h2 className="text-2xl font-bold leading-relaxed sm:text-3xl">
            مرحبًا بك في مجتمع المساهمين!
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-8 text-teal-50 sm:text-base">
            كل إشارة تضيفها تساعد في بناء قاعدة بيانات أفضل للغة الإشارة
            اليمنية، وتساهم في جعل التواصل أكثر سهولة وشمولًا.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-sm font-bold text-teal-800 opacity-80"
              title="سيتم تفعيل رفع المساهمات في المرحلة التالية"
            >
              <HandHeart size={18} />
              إضافة مساهمة قريبًا
            </button>

            <Link
              href="/predict"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              تجربة التعرف على الإشارات
              <ArrowLeft size={17} />
            </Link>
          </div>
        </div>

        <div className="hidden h-40 w-40 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:flex">
          <HandHeart size={76} strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}