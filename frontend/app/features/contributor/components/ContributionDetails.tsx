"use client";

import { useState } from "react";

export const YSL_CLASSES = [
  "Animals",
  "Attentive",
  "brother",
  "builder",
  "cheap",
  "doctor",
  "excellent",
  "friend",
  "good",
  "him",
  "how",
  "husband",
  "mechanic",
  "morning",
  "plane",
  "president",
  "satisfaction",
  "school",
  "seven",
  "six",
  "teacher",
  "translator",
  "vegetables",
  "very good",
  "wait",
  "wash",
  "watch",
  "watch maker",
  "what",
  "when",
  "who",
  "with_god_will",
  "yours",
];

interface Props {
  className: string;
  description: string;
  dialect: string;
  onClassChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onDialectChange: (value: string) => void;
}

export default function ContributionDetails({
  className,
  description,
  dialect,
  onClassChange,
  onDescriptionChange,
  onDialectChange,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-700">
          فئة الإشارة
        </label>

        <select
          value={className}
          onChange={(event) => onClassChange(event.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        >
          <option value="">اختر فئة الإشارة</option>

          {YSL_CLASSES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <p className="mt-2 text-xs text-gray-400">
          الفئات الحالية مأخوذة من مجموعة بيانات ArYSL ذات الـ32 فئة.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-700">
          وصف الإشارة
        </label>

        <textarea
          value={description}
          onChange={(event) => onDescriptionChange(event.target.value)}
          rows={4}
          maxLength={1000}
          placeholder="اشرح كيفية أداء الإشارة، ومعناها، وأي معلومات تساعد فريق المراجعة..."
          className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />

        <p className="mt-2 text-left text-xs text-gray-400">
          {description.length}/1000
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-700">
          المنطقة أو اللهجة (اختياري)
        </label>

        <input
          type="text"
          value={dialect}
          onChange={(event) => onDialectChange(event.target.value)}
          placeholder="مثال: صنعاء، تعز، عدن..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />
      </div>
    </div>
  );
}