"use client";

import { useRef, useState } from "react";
import {
  UploadCloud,
  Image as ImageIcon,
} from "lucide-react";

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
  disabled?: boolean;
}

export default function ImageUploader({
  onImageSelect,
  disabled = false,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file?: File) => {
    if (file) {
      onImageSelect(file);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        if (!disabled) setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);

        if (!disabled) {
          handleFile(event.dataTransfer.files[0]);
        }
      }}
      onClick={() => !disabled && inputRef.current?.click()}
      className={`group flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
        dragging
          ? "border-blue-500 bg-blue-50"
          : "border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50"
      } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        disabled={disabled}
        onChange={(event) => handleFile(event.target.files?.[0])}
      />

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
        <UploadCloud size={32} />
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-800">
        ارفع صورة الإشارة هنا
      </h3>

      <p className="mb-5 text-sm text-slate-500">
        اسحب الصورة وأفلتها هنا، أو اضغط لاختيار صورة من جهازك.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {["PNG", "JPG", "WEBP"].map((format) => (
          <span
            key={format}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500"
          >
            {format}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
        <ImageIcon size={14} />
        <span>الحد الأقصى لحجم الصورة 10 MB</span>
      </div>
    </div>
  );
}