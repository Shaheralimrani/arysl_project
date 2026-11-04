"use client";

import { Eye, EyeOff, LockKeyhole } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export default function PasswordInput({
  value,
  onChange,
  visible,
  onToggle,
  disabled = false,
}: PasswordInputProps) {
  return (
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        كلمة المرور
      </label>

      <div className="relative">
        <LockKeyhole
          size={19}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id="password"
          name="password"
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="أدخل كلمة المرور"
          autoComplete="current-password"
          required
          disabled={disabled}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
        />

        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          aria-label={
            visible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600 disabled:opacity-50"
        >
          {visible ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>
    </div>
  );
}