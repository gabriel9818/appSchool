from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from controllers.teacher_read_controller import get_all_teachers, get_teacher_by_id

router = APIRouter()
##Teachers test 17

@router.get("/teachers_read")
def read_all_teachers(db: Session = Depends(get_db)):
    teachers = get_all_teachers(db)
    if not teachers:
        raise HTTPException(status_code=404, detail="No teachers found")
    return {"teachers": teachers}

@router.get("/teachers_read/{teacher_id}")
def read_teacher_by_id(teacher_id: int, db: Session = Depends(get_db)):
    teacher = get_teacher_by_id(db, teacher_id)
    if not teacher:
        raise HTTPException(status_code=404, detail=f"Teacher with ID {teacher_id} not found")
    return {"teacher": teacher}
