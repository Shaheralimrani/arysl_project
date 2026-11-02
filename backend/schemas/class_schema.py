from pydantic import BaseModel

class ClassResponse(BaseModel):
    english: str
    arabic: str

class ClassesListResponse(BaseModel):
    count: int
    data: list[ClassResponse]