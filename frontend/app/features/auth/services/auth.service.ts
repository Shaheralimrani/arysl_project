import type {
  LoginApiResponse,
  LoginCredentials,
} from "../types/auth.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginApiResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  let data: LoginApiResponse;

  try {
    data = await response.json();
  } catch {
    throw new Error("تعذر قراءة استجابة الخادم.");
  }

  if (!response.ok) {
    throw new Error(
      data.detail || data.message || "البريد الإلكتروني أو كلمة المرور غير صحيحة."
    );
  }

  return data;
}