from sqlalchemy.orm import Session
from models.teacher_model import Teacher

def create_teacher(db: Session, name: str, email: str, subject: str):
    try:
        new_teacher = Teacher(name=name, email=email, subject=subject)
        db.add(new_teacher)
        db.commit()
        db.refresh(new_teacher)
        print(f"✅ Profesor {name} agregado correctamente a la base de datos.")
        return new_teacher
    except Exception as e:
        db.rollback()  # Evita que la transacción quede en estado inconsistente
        print(f"❌ Error al crear profesor: {e}")
        raise e
