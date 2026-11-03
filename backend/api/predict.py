from fastapi import APIRouter, UploadFile, File, HTTPException
import random

router = APIRouter(
    tags=["Prediction"] # سيظهر كقسم جديد في /docs
)

@router.post("/predict")
async def predict_sign(file: UploadFile = File(...)):
    """
    استقبال صورة والعودة بالتوقع.
    (حالياً يستخدم الذكاء الاصطناعي الوهمي لتجربة الاتصال)
    """
    # 1. التحقق من أن الملف المرفوع هو صورة
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="الملف المرفوع ليس صورة صالحة")

    # 2. قراءة الصورة (في المستقبل سنمررها للنموذج الحقيقي)
    # image_bytes = await file.read()
    
    # 3. محاكاة الذكاء الاصطناعي (للتجربة)
    # قائمة بأسماء بعض الفئات (سنستبدلها لاحقاً بنتيجة النموذج الحقيقي)
    mock_classes = ["حيوانات", "طبيب", "بناء", "مدرسة", "معلم"]
    prediction = random.choice(mock_classes)
    
    # 4. إرجاع النتيجة للواجهة
    return {
        "prediction": prediction,
        "confidence": round(random.uniform(0.80, 0.99), 2),
        "message": "تم التحليل بنجاح (نموذج تجريبي)"
    }