"use client";

import { useState } from "react";

import { loginUser } from "../services/auth.service";

import type {
  UseLoginReturn,
} from "../types/auth.types";

export function useLogin(): UseLoginReturn {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState<string | null>(null);

  const togglePassword = () => {
    setShowPassword((previous) => !previous);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError(null);
    setSuccess(null);

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setError("يرجى إدخال بريد إلكتروني صحيح.");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const response = await loginUser({
        email: normalizedEmail,
        password,
      });

      setSuccess(response.message || "تم تسجيل الدخول بنجاح.");

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "تعذر الاتصال بالخادم."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}