"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "./navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="التنقل الرئيسي">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative py-2 text-sm font-semibold transition-colors
                  ${
                    isActive
                      ? "text-brand-700"
                      : "text-slate-600 hover:text-brand-700"
                  }
                `}
              >
                {link.label}

                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand-600" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}