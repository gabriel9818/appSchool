from sqlalchemy import Column, Integer, String
from db.database import Base
from pydantic import BaseModel, EmailStr

class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    subject = Column(String, nullable=False)

class TeacherCreate(BaseModel):
    name: str
    email: EmailStr  # Asegura que el email tenga un formato válido
    subject: str
