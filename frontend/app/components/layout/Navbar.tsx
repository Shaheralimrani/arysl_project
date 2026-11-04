import Link from "next/link";
import { Hand, LogIn } from "lucide-react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          aria-label="ArYSL - الصفحة الرئيسية"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
            <Hand size={25} strokeWidth={2} />
          </span>

          <span className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              ArYSL
            </span>

            <span className="text-[10px] font-medium text-slate-500">
              لغة الإشارة اليمنية
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 hover:shadow-md sm:flex"
          >
            <LogIn size={17} />
            تسجيل الدخول
          </Link>

          <MobileNav />

        </div>
      </div>
    </header>
  );
}