"use client";

import {
  Mail,
  LogIn,
  LoaderCircle,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

import PasswordInput from "./PasswordInput";

import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const {
    email,
    password,
    showPassword,
    loading,
    error,
    success,

    setEmail,
    setPassword,
    togglePassword,
    handleSubmit,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          البريد الإلكتروني
        </label>

        <div className="relative">
          <Mail
            size={19}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@email.com"
            autoComplete="email"
            required
            disabled={loading}
            dir="ltr"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-4 pr-12 text-left text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
          />
        </div>
      </div>

      {/* Password */}

      <PasswordInput
        value={password}
        onChange={setPassword}
        visible={showPassword}
        onToggle={togglePassword}
        disabled={loading}
      />

      {/* Error */}

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
        >
          <AlertCircle size={19} className="mt-0.5 shrink-0" />

          <p>{error}</p>
        </div>
      )}

      {/* Success */}

      {success && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700"
        >
          <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

          <p>{success}</p>
        </div>
      )}

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
      >
        {loading ? (
          <>
            <LoaderCircle size={21} className="animate-spin" />
            جارٍ تسجيل الدخول...
          </>
        ) : (
          <>
            <LogIn size={21} />
            تسجيل الدخول
          </>
        )}
      </button>

    </form>
  );
}