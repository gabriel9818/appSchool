from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from controllers.teacher_delete_controller import delete_teacher_by_id

router = APIRouter()

@router.delete("/teachers/{teacher_id}")
def delete_teacher(teacher_id: int, db: Session = Depends(get_db)):
    teacher = delete_teacher_by_id(db, teacher_id)
    if not teacher:
        raise HTTPException(status_code=404, detail=f"Teacher with ID {teacher_id} not found")
    return {"message": "Teacher deleted successfully", "teacher": {"id": teacher_id}}
