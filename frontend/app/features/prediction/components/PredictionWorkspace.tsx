"use client";

import {
  RotateCcw,
  ScanSearch,
  LoaderCircle,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

import PredictionHeader from "./PredictionHeader";
import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";
import PredictionResult from "./PredictionResult";

import { usePrediction } from "../hooks/usePrediction";

export default function PredictionWorkspace() {
  const {
    selectedImage,
    previewUrl,
    result,
    loading,
    error,
    handleImageChange,
    handleSubmit,
    reset,
  } = usePrediction();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <PredictionHeader />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  صورة الإشارة
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  اختر صورة واضحة لليد والإشارة.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <ScanSearch size={24} />
              </div>
            </div>

            {!previewUrl ? (
              <ImageUploader
                onImageSelect={handleImageChange}
                disabled={loading}
              />
            ) : (
              <ImagePreview
                previewUrl={previewUrl}
                fileName={selectedImage?.name || ""}
                fileSize={selectedImage?.size || 0}
                onRemove={reset}
                disabled={loading}
              />
            )}

            {error && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                <AlertCircle size={20} className="shrink-0" />

                <p>{error}</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!selectedImage || loading}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin" size={21} />
                  جاري تحليل الصورة...
                </>
              ) : (
                <>
                  <ScanSearch size={21} />
                  تحليل الإشارة
                </>
              )}
            </button>

            {selectedImage && (
              <button
                type="button"
                onClick={reset}
                disabled={loading}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
              >
                <RotateCcw size={16} />
                إعادة تعيين
              </button>
            )}

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck size={15} className="text-green-600" />
              <span>يتم إرسال الصورة إلى خادم التحليل لمعالجتها.</span>
            </div>
          </section>

          <section className="min-h-96 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                نتيجة التعرف
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                ستظهر نتيجة تحليل الصورة هنا.
              </p>
            </div>

            {result ? (
              <PredictionResult result={result} />
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-500 shadow-sm">
                  <ScanSearch size={30} />
                </div>

                <h3 className="font-bold text-slate-700">
                  بانتظار الصورة
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-7 text-slate-400">
                  اختر صورة الإشارة واضغط على زر التحليل
                  حتى تظهر النتيجة هنا.
                </p>
              </div>
            )}
          </section>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
          <h3 className="mb-2 font-bold text-blue-900">
            نصائح للحصول على نتائج أفضل
          </h3>

          <ul className="grid gap-2 text-sm leading-7 text-blue-800 md:grid-cols-3">
            <li>• استخدم صورة واضحة وغير مشوشة.</li>
            <li>• تأكد من ظهور اليد بشكل كامل.</li>
            <li>• تجنب الإضاءة الضعيفة والخلفيات المزدحمة.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}