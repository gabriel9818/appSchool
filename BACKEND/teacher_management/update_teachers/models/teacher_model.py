from sqlalchemy import Column, Integer, String
from db.database import Base
from pydantic import BaseModel

class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    subject = Column(String, nullable=False)

# ✅ Nuevo modelo para actualizar datos del profesor
class TeacherUpdate(BaseModel):
    name: str | None = None
    email: str | None = None
    subject: str | None = None
