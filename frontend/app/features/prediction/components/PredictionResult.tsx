import { CheckCircle2, BrainCircuit, Sparkles } from "lucide-react";

import type { PredictionResult as PredictionResultType } from "../types/prediction.types";

interface PredictionResultProps {
  result: PredictionResultType;
}

export default function PredictionResult({
  result,
}: PredictionResultProps) {
  const confidence =
    result.confidence !== undefined &&
    Number.isFinite(result.confidence)
      ? result.confidence <= 1
        ? result.confidence * 100
        : result.confidence
      : null;

  return (
    <section
      aria-live="polite"
      className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm"
    >
      <div className="flex items-center gap-3 border-b border-green-100 bg-green-50 p-5">
        <CheckCircle2 className="text-green-600" size={24} />

        <div>
          <h2 className="font-bold text-green-800">
            اكتمل التحليل
          </h2>

          <p className="mt-1 text-xs text-green-700">
            النتيجة التي أعادها الخادم
          </p>
        </div>
      </div>

      <div className="p-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <BrainCircuit size={32} />
        </div>

        <p className="mb-3 text-sm font-medium text-slate-500">
          الإشارة المتوقعة
        </p>

        <h3 className="mb-6 text-4xl font-extrabold text-slate-900">
          {result.prediction}
        </h3>

        {confidence !== null && (
          <div className="mx-auto max-w-sm rounded-2xl bg-slate-50 p-5">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-600">
                مستوى الثقة
              </span>

              <span className="font-bold text-blue-600">
                {confidence.toFixed(2)}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${Math.min(100, Math.max(0, confidence))}%`,
                }}
              />
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Sparkles size={14} />
          <span>
            {confidence === null
              ? "لم يوفر الخادم قيمة لمستوى الثقة."
              : "قيمة الثقة كما وردت من الخادم."}
          </span>
        </div>
      </div>
    </section>
  );
}