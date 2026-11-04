import Link from "next/link";
import { Hand } from "lucide-react";

export default function FooterBrand() {
  return (
    <div>
      <Link href="/" className="mb-4 inline-flex items-center gap-3">
        <span className="rounded-xl bg-blue-600 p-2 text-white">
          <Hand size={24} />
        </span>

        <span className="text-2xl font-bold text-white">ArYSL</span>
      </Link>

      <p className="max-w-sm text-sm leading-7 text-slate-400">
        منصة ذكية تهدف إلى دعم التعرف على لغة الإشارة اليمنية
        وتسهيل التواصل باستخدام تقنيات الذكاء الاصطناعي.
      </p>
    </div>
  );
}