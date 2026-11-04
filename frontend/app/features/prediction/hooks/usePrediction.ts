"use client";

import { useEffect, useState } from "react";

import { predictImage } from "../services/prediction.service";

import type {
  PredictionResult,
  UsePredictionReturn,
} from "../types/prediction.types";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export function usePrediction(): UsePredictionReturn {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [result, setResult] = useState<PredictionResult | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageChange = (file: File) => {
    setError(null);
    setResult(null);

    if (!file.type.startsWith("image/")) {
      setError("الرجاء اختيار ملف صورة صالح.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("حجم الصورة كبير. الحد الأقصى المسموح به هو 10 MB.");
      return;
    }

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!selectedImage || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const prediction = await predictImage(selectedImage);
      setResult(prediction);
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

  const reset = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return {
    selectedImage,
    previewUrl,
    result,
    loading,
    error,
    handleImageChange,
    handleSubmit,
    reset,
  };
}