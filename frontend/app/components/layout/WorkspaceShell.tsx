"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import AppSidebar from "./AppSidebar";

interface WorkspaceShellProps {
  children: React.ReactNode;
}

export default function WorkspaceShell({
  children,
}: WorkspaceShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((previous) => !previous)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "lg:mr-20" : "lg:mr-72"
        }`}
      >
        <div className="border-b border-gray-100 bg-white px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <Menu size={20} />
            القائمة
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}