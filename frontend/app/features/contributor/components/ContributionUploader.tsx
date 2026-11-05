"use client";

import { useRef } from "react";
import { ImagePlus, Video, UploadCloud, X } from "lucide-react";

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
}

export default function ContributionUploader({
  files,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const accepted = Array.from(selectedFiles).filter((file) => {
      return (
        file.type.startsWith("image/") ||
        file.type.startsWith("video/")
      );
    });

    onChange([...files, ...accepted]);
  };

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        className="hidden"
        onChange={(event) => {
          handleFiles(event.target.files);
          event.target.value = "";
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/70 px-5 py-10 text-center transition hover:border-teal-400 hover:bg-teal-50/30"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
          <UploadCloud size={32} />
        </div>

        <h3 className="font-bold text-gray-800">
          اسحب الملفات هنا أو اضغط للاختيار
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          يمكنك رفع الصور ومقاطع الفيديو معًا.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <ImagePlus size={15} />
            صور
          </span>

          <span className="flex items-center gap-1">
            <Video size={15} />
            فيديو
          </span>
        </div>
      </button>

      {files.length > 0 && (
        <div className="mt-5 space-y-3">
          <h4 className="text-sm font-bold text-gray-700">
            الملفات المختارة ({files.length})
          </h4>

          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                {file.type.startsWith("image/") ? (
                  <ImagePlus size={19} />
                ) : (
                  <Video size={19} />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-700">
                  {file.name}
                </p>

                <p className="text-xs text-gray-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>

              <button
                type="button"
                onClick={() => removeFile(index)}
                aria-label={`حذف ${file.name}`}
                className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}