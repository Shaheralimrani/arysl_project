from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import classes, predict

# 1. إنشاء التطبيق
app = FastAPI(
    title="ArYSL API",
    description="نظام التعرف على لغة الإشارة اليمنية",
    version="0.1.0"
)

# 2. إعدادات الأمان (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. ربط المسارات (Routers)
app.include_router(classes.router)
app.include_router(predict.router)

# 4. مسار فحص الحالة
@app.get("/health", tags=["System"])
def health_check():
    return {"status": "ok", "message": "خادم لغة الإشارة يعمل بنجاح!"}