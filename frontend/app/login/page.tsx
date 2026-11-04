import Link from "next/link";

import LoginHeader from "../features/auth/components/LoginHeader";
import LoginForm from "../features/auth/components/LoginForm";

import { ArrowRight, Hand } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">

      <div className="w-full max-w-md">

        {/* Back to Home */}

        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowRight size={17} />
            العودة إلى الرئيسية
          </Link>
        </div>

        {/* Login Card */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">

          <LoginHeader />

          <LoginForm />

          <div className="my-7 border-t border-slate-100" />

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs text-slate-400">
              <Hand size={15} className="text-blue-600" />

              <span>ArYSL - لغة الإشارة اليمنية</span>
            </div>

            <p className="mt-3 text-xs leading-6 text-slate-400">
              منصة تهدف إلى تسهيل التواصل وتعزيز إمكانية الوصول
              باستخدام تقنيات الذكاء الاصطناعي.
            </p>
          </div>

        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          جميع الحقوق محفوظة © ArYSL
        </p>

      </div>
    </main>
  );
}