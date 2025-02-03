from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def update_teacher_by_id(db: Session, teacher_id: int, name: str = None, email: str = None, subject: str = None):
    teacher = db.query(Teacher).filter(Teacher.id == teacher_id).first()
    if not teacher:
        print(f"Teacher with ID {teacher_id} not found.")
        return None

    print(f"Original Data: {teacher.name}, {teacher.email}, {teacher.subject}")

    # Actualizar los valores solo si son proporcionados
    if name:
        teacher.name = name
    if email:
        teacher.email = email
    if subject:
        teacher.subject = subject

    print(f"Updated Data Before Commit: {teacher.name}, {teacher.email}, {teacher.subject}")

    # Confirmar los cambios en la base de datos
    db.commit()
    db.refresh(teacher)  # Refrescar el objeto con los datos actualizados

    print(f"Final Data in DB: {teacher.name}, {teacher.email}, {teacher.subject}")
    return teacher
