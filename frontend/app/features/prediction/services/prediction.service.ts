import type {
  PredictionApiResponse,
  PredictionResult,
} from "../types/prediction.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function predictImage(
  file: File
): Promise<PredictionResult> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    let message = "حدث خطأ أثناء تحليل الصورة.";

    try {
      const errorData = await response.json();
      message = errorData.detail || message;
    } catch {
      // استخدام رسالة الخطأ الافتراضية
    }

    throw new Error(message);
  }

  const data = (await response.json()) as PredictionApiResponse;

  const prediction =
    data.prediction || data.label || data.class_name;

  if (!prediction || typeof prediction !== "string") {
    throw new Error("لم يرجع الخادم نتيجة تعرف صالحة.");
  }

  return {
    prediction,
    confidence:
      typeof data.confidence === "number"
        ? data.confidence
        : undefined,
  };
}