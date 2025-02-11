from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from controllers.teacher_create_controller import create_teacher
from models.teacher_model import TeacherCreate

router = APIRouter()

@router.post("/teachers")
def create_teacher_endpoint(teacher: TeacherCreate, db: Session = Depends(get_db)):
    try:
        new_teacher = create_teacher(db, teacher.name, teacher.email, teacher.subject)
        return {"message": "✅ Teacher created successfully", "teacher": new_teacher}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"❌ Error al crear profesor: {e}")
