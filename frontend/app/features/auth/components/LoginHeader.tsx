import { Hand, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
        <Hand size={34} />
      </div>

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
        <Sparkles size={15} />
        مرحبًا بك في ArYSL
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        تسجيل الدخول
      </h1>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        سجّل الدخول للوصول إلى منصة التعرف على لغة الإشارة اليمنية.
      </p>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
        <ShieldCheck size={16} className="text-green-600" />
        <span>منصة التعرف على لغة الإشارة اليمنية</span>
      </div>
    </div>
  );
}