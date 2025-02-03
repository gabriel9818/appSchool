from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def delete_teacher_by_id(db: Session, teacher_id: int):
    teacher = db.query(Teacher).filter(Teacher.id == teacher_id).first()
    if not teacher:
        return None
    db.delete(teacher)
    db.commit()
    return teacher
