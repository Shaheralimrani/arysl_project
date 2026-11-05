import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function WelcomeCard() {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-l from-teal-800 via-teal-700 to-cyan-700 p-7 text-white sm:p-10">
      <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium">
          <Sparkles size={15} />
          مرحبًا بك في ArYSL
        </div>

        <h2 className="text-2xl font-bold leading-relaxed sm:text-3xl">
          أهلًا بك في عالم
          <span className="text-cyan-200"> التواصل بلا حدود</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-8 text-teal-50 sm:text-base">
          استخدم تقنيات الذكاء الاصطناعي للتعرف على لغة الإشارة اليمنية،
          وساهم في بناء مستقبل أكثر شمولًا وسهولة في التواصل.
        </p>

        <Link
          href="/predict"
          className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
        >
          ابدأ التعرف الآن
          <ArrowLeft size={18} />
        </Link>
      </div>
    </section>
  );
}