from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def create_teacher(db: Session, name: str, email: str, subject: str):
    new_teacher = Teacher(name=name, email=email, subject=subject)
    db.add(new_teacher)
    db.commit()
    db.refresh(new_teacher)
    return new_teacher
