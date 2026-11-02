from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import classes  # استيراد المسار

app = FastAPI(
    title="ArYSL API",
    description="نظام التعرف على لغة الإشارة اليمنية",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ربط الـ Router بالتطبيق
app.include_router(classes.router)

@app.get("/health", tags=["System"])
def health_check():
    return {"status": "ok", "message": "خادم لغة الإشارة يعمل بنجاح!"}