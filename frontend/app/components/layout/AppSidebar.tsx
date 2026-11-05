"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Home,
  BrainCircuit,
  LayoutDashboard,
  HandHeart,
  History,
  Award,
  Settings,
  Menu,
  X,
  ChevronRight,
  LogOut,
  Languages,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";

const navigationGroups = [
  {
    title: "الرئيسية",
    items: [
      {
        label: "الصفحة الرئيسية",
        href: "/",
        icon: Home,
      },
      {
        label: "التعرف على الإشارات",
        href: "/predict",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "مساحة العمل",
    items: [
      {
        label: "لوحة المستخدم",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "لوحة المساهم",
        href: "/contributor/dashboard",
        icon: HandHeart,
      },
      {
        label: "تقديم مساهمة",
        href: "/contribute",
        icon: HandHeart,
      },
      {
        label: "مساهماتي",
        href: "/contributions",
        icon: History,
      },
      {
        label: "النقاط والشارات",
        href: "/achievements",
        icon: Award,
      },
    ],
  },
  {
    title: "الحساب",
    items: [
      {
        label: "الإعدادات",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function AppSidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed right-0 top-0 z-50 flex h-screen flex-col
          border-l border-gray-100 bg-white
          transition-all duration-300
          ${collapsed ? "w-20" : "w-72"}
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white">
              <Languages size={23} />
            </div>

            {!collapsed && (
              <div>
                <h2 className="text-lg font-extrabold text-gray-900">
                  ArYSL
                </h2>

                <p className="text-[10px] text-gray-400">
                  لغة الإشارة اليمنية
                </p>
              </div>
            )}
          </Link>

          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "توسيع القائمة" : "تصغير القائمة"}
            className="hidden rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-teal-700 lg:block"
          >
            {collapsed ? (
              <PanelRightOpen size={19} />
            ) : (
              <PanelRightClose size={19} />
            )}
          </button>

          <button
            type="button"
            onClick={onMobileClose}
            aria-label="إغلاق القائمة"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-6">
          {navigationGroups.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <h3 className="mb-3 px-3 text-[11px] font-bold text-gray-400">
                  {group.title}
                </h3>
              )}

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onMobileClose}
                      title={collapsed ? item.label : undefined}
                      className={`
                        flex items-center gap-3 rounded-xl px-3 py-3
                        text-sm font-medium transition
                        ${
                          active
                            ? "bg-teal-50 text-teal-800"
                            : "text-gray-600 hover:bg-gray-50 hover:text-teal-700"
                        }
                        ${collapsed ? "justify-center" : ""}
                      `}
                    >
                      <Icon size={20} className="shrink-0" />

                      {!collapsed && <span>{item.label}</span>}

                      {!collapsed && active && (
                        <ChevronRight
                          size={16}
                          className="mr-auto"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-100 p-3">
          <button
            type="button"
            title={collapsed ? "تسجيل الخروج" : undefined}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-600 transition hover:bg-red-50 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <LogOut size={19} />

            {!collapsed && <span>تسجيل الخروج</span>}
          </button>
        </div>
      </aside>
    </>
  );
}