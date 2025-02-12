from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def update_teacher_by_id(db: Session, teacher_id: int, name: str = None, email: str = None, subject: str = None):
    teacher = db.query(Teacher).filter(Teacher.id == teacher_id).first()
    
    if not teacher:
        print(f"❌ Teacher with ID {teacher_id} not found.")
        return None

    print(f"🔄 Original Data: {teacher.name}, {teacher.email}, {teacher.subject}")

    # Actualizar solo los campos proporcionados a
    if name:
        teacher.name = name
    if email:
        teacher.email = email
    if subject:
        teacher.subject = subject

    db.commit()  # Guardar cambios en la BD
    db.refresh(teacher)  # Recargar el objeto desde la base de datos

    print(f"✅ Updated Data in DB: {teacher.name}, {teacher.email}, {teacher.subject}")
    
    return teacher
