from fastapi import APIRouter, HTTPException
from schemas.class_schema import ClassesListResponse
from services import class_service

router = APIRouter(
    prefix="/classes",
    tags=["Classes"] # هذا سيظهر كقسم جميل في صفحة /docs
)

@router.get("/", response_model=ClassesListResponse)
def get_classes():
    """جلب قائمة الفئات من قاعدة البيانات"""
    data = class_service.fetch_all_classes()
    
    if data is None:
        raise HTTPException(status_code=500, detail="فشل الاتصال بقاعدة البيانات")
        
    return {"count": len(data), "data": data}