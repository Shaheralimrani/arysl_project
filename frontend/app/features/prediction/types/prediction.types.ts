export interface PredictionResult {
  prediction: string;
  confidence?: number;
}

export interface PredictionApiResponse {
  prediction?: string;
  label?: string;
  class_name?: string;
  confidence?: number;
  message?: string;
  detail?: string;
}

export interface UsePredictionReturn {
  selectedImage: File | null;
  previewUrl: string | null;
  result: PredictionResult | null;
  loading: boolean;
  error: string | null;
  handleImageChange: (file: File) => void;
  handleSubmit: () => Promise<void>;
  reset: () => void;
}