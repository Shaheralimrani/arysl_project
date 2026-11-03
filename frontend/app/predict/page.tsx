"use client";

import { useState } from "react";

export default function PredictPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // دالة تعمل عند اختيار صورة
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // لإنشاء رابط مؤقت لعرض الصورة
      setPrediction(null); // مسح أي نتيجة قديمة
    }
  };

  // دالة إرسال الصورة للخادم
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;

    setLoading(true);
    
    // تجهيز الصورة لإرسالها كـ FormData
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      // إرسال الطلب إلى الـ Backend (سنقوم ببرمجته لاحقاً)
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        setPrediction("لم يتم التعرف على الإشارة");
      }
    } catch (error) {
      console.error(error);
      setPrediction("حدث خطأ أثناء الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          التعرف على لغة الإشارة
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* زر اختيار الصورة */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* معاينة الصورة */}
          {previewUrl && (
            <div className="flex justify-center mt-4">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="w-48 h-48 object-cover rounded-lg shadow-md border" 
              />
            </div>
          )}

          {/* زر الإرسال */}
          <button
            type="submit"
            disabled={!selectedImage || loading}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {loading ? "جاري التحليل..." : "تحليل الصورة"}
          </button>
        </form>

        {/* عرض النتيجة */}
        {prediction && (
          <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <h2 className="text-xl font-bold">النتيجة:</h2>
            <p className="text-2xl mt-2 font-extrabold">{prediction}</p>
          </div>
        )}
      </div>
    </main>
  );
}