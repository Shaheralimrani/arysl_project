"use client";

import Image from "next/image";
import { ImageIcon, X, FileImage } from "lucide-react";

interface ImagePreviewProps {
  previewUrl: string;
  fileName: string;
  fileSize: number;
  onRemove: () => void;
  disabled?: boolean;
}

export default function ImagePreview({
  previewUrl,
  fileName,
  fileSize,
  onRemove,
  disabled = false,
}: ImagePreviewProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <ImageIcon size={18} className="text-blue-600" />
          <h3 className="font-bold text-slate-800">
            معاينة الصورة
          </h3>
        </div>

        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label="إزالة الصورة"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex min-h-64 items-center justify-center bg-slate-50 p-5">
        <Image
          src={previewUrl}
          alt="معاينة صورة الإشارة"
          width={500}
          height={500}
          unoptimized
          className="max-h-80 w-auto rounded-2xl object-contain"
        />
      </div>

      <div className="flex items-center gap-3 p-5">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <FileImage size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-800">
            {fileName}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {(fileSize / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
      </div>
    </div>
  );
}