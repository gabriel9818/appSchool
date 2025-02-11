from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from controllers.teacher_update_controller import update_teacher_by_id
from models.teacher_model import TeacherUpdate  # ✅ Asegurar que existe esta importación

router = APIRouter()

@router.put("/teachers/{teacher_id}")
def update_teacher(
    teacher_id: int,
    teacher_data: TeacherUpdate,  # ✅ Usar el modelo TeacherUpdate
    db: Session = Depends(get_db),
):
    teacher = update_teacher_by_id(db, teacher_id, teacher_data.name, teacher_data.email, teacher_data.subject)
    if not teacher:
        raise HTTPException(status_code=404, detail=f"Teacher with ID {teacher_id} not found")
    return {
        "message": "Teacher updated successfully",
        "teacher": {
            "id": teacher.id,
            "name": teacher.name,
            "email": teacher.email,
            "subject": teacher.subject,
        },
    }
