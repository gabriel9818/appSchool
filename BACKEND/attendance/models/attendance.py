from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from db.database import Base

class Attendance(Base):
    __tablename__ = "attendances"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, nullable=False)  # ID del estudiante desde student_registration
    status = Column(String, nullable=False)  # Presente, Ausente, Tarde
    timestamp = Column(DateTime, default=func.now())  # Hora de la asistencia
