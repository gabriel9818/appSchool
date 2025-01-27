from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def get_all_teachers(db: Session):
    return db.query(Teacher).all()

def get_teacher_by_id(db: Session, teacher_id: int):
    return db.query(Teacher).filter(Teacher.id == teacher_id).first()
