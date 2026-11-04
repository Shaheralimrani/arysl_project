import Link from "next/link";
import {
  ArrowLeft,
  Hand,
  Sparkles,
  BrainCircuit,
  ScanFace,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

        <div className="text-center lg:text-right">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            <span>التكنولوجيا من أجل تواصل أكثر شمولًا</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.5] tracking-tight text-white sm:text-5xl lg:text-6xl">
            نفهم لغة الإشارة،
            <span className="block text-blue-400">
              لنقرب المسافات.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-9 text-slate-400 sm:text-lg lg:mx-0">
            ArYSL منصة تقنية تهدف إلى تطوير التعرف على لغة الإشارة
            اليمنية باستخدام الذكاء الاصطناعي والرؤية الحاسوبية،
            للمساهمة في تسهيل التواصل وإزالة الحواجز اللغوية.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/predict"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              جرّب التعرف على الإشارة
              <ArrowLeft size={19} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-white/5"
            >
              اكتشف المشروع
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400 lg:justify-start">
            <div className="flex items-center gap-2">
              <BrainCircuit size={18} className="text-blue-400" />
              <span>الذكاء الاصطناعي</span>
            </div>

            <div className="flex items-center gap-2">
              <ScanFace size={18} className="text-blue-400" />
              <span>الرؤية الحاسوبية</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full border border-blue-400/10 sm:h-96 sm:w-96" />
          <div className="absolute h-60 w-60 rounded-full border border-blue-400/10 sm:h-80 sm:w-80" />

          <div className="relative flex aspect-square w-full items-center justify-center rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-blue-500/15 to-indigo-500/5 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
            <div className="absolute inset-5 rounded-[2rem] border border-white/5" />

            <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-blue-400/20 bg-blue-500/10 shadow-inner shadow-blue-400/10 sm:h-52 sm:w-52">
              <Hand
                size={110}
                strokeWidth={1.2}
                className="text-blue-400 sm:h-36 sm:w-36"
              />

              <div className="absolute -right-5 -top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-800 text-blue-400 shadow-xl">
                <Sparkles size={23} />
              </div>
            </div>

            <div className="absolute bottom-7 left-7 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-400">
                لغة الإشارة اليمنية
              </p>
              <p className="mt-1 font-bold text-white">ArYSL</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}