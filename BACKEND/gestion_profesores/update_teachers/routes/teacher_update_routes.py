from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from controllers.teacher_update_controller import update_teacher_by_id

router = APIRouter()

@router.put("/teachers/{teacher_id}")
def update_teacher(
    teacher_id: int,
    name: str = None,
    email: str = None,
    subject: str = None,
    db: Session = Depends(get_db),
):
    teacher = update_teacher_by_id(db, teacher_id, name, email, subject)
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
