"use client";

import { useState } from "react";
import { Send, LoaderCircle, CheckCircle2 } from "lucide-react";

import ContributionUploader from "./ContributionUploader";
import ContributionDetails from "./ContributionDetails";
import ContributionGuidelines from "./ContributionGuidelines";

import { submitContribution } from "../services/contribution.service";

export default function ContributionForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");
  const [dialect, setDialect] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!className) {
      setError("يرجى اختيار فئة الإشارة.");
      return;
    }

    if (files.length === 0) {
      setError("يرجى اختيار صورة أو فيديو واحد على الأقل.");
      return;
    }

    if (!description.trim()) {
      setError("يرجى كتابة وصف للإشارة.");
      return;
    }

    const invalidFile = files.find(
      (file) =>
        !file.type.startsWith("image/") &&
        !file.type.startsWith("video/")
    );

    if (invalidFile) {
      setError("يوجد ملف غير مدعوم.");
      return;
    }

    const maxFileSize = 50 * 1024 * 1024;

    if (files.some((file) => file.size > maxFileSize)) {
      setError("حجم أحد الملفات يتجاوز الحد المؤقت (50 MB).");
      return;
    }

    setLoading(true);

    try {
      await submitContribution({
        className,
        description: description.trim(),
        dialect,
        files,
      });

      setSuccess("تم إرسال المساهمة بنجاح، وهي الآن بانتظار المراجعة.");

      setFiles([]);
      setClassName("");
      setDescription("");
      setDialect("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "حدث خطأ أثناء إرسال المساهمة."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-2 text-lg font-bold text-gray-900">
          معلومات المساهمة
        </h2>

        <p className="mb-7 text-sm text-gray-500">
          أدخل معلومات الإشارة ثم أرفق الصور أو الفيديوهات.
        </p>

        <div className="space-y-7">
          <ContributionDetails
            className={className}
            description={description}
            dialect={dialect}
            onClassChange={setClassName}
            onDescriptionChange={setDescription}
            onDialectChange={setDialect}
          />

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-700">
              ملفات الإشارة
            </h3>

            <ContributionUploader
              files={files}
              onChange={setFiles}
            />
          </div>
        </div>
      </div>

      <ContributionGuidelines />

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          role="status"
          className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700"
        >
          <CheckCircle2 size={19} />
          {success}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? (
          <>
            <LoaderCircle size={19} className="animate-spin" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            <Send size={18} />
            إرسال المساهمة للمراجعة
          </>
        )}
      </button>
    </form>
  );
}