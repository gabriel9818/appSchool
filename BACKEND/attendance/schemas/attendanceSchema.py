import strawberry
from datetime import datetime
from typing import List, Optional
from sqlalchemy.future import select
from db.database import get_db
from models.attendance import Attendance
import asyncio
import httpx  #To make the request to student_registration

STUDENT_API_URL = "http://localhost:8085/students"  # port de student_registration

@strawberry.type
class AttendanceType:
    id: int
    student_id: int
    student_name: Optional[str]  # Nuevo campo
    status: str
    timestamp: datetime

async def fetch_student_name(student_id: int) -> Optional[str]:
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{STUDENT_API_URL}/{student_id}")
        if response.status_code == 200:
            student_data = response.json()
            return student_data.get("name")  # Ajusta según la estructura del JSON
        return None

@strawberry.type
class Query:
    @strawberry.field
    async def get_attendance(self, id: int) -> AttendanceType:
        async with get_db() as session:
            result = await session.execute(select(Attendance).filter(Attendance.id == id))
            attendance = result.scalars().first()
            if not attendance:
                return None

            student_name = await fetch_student_name(attendance.student_id)
            
            return AttendanceType(
                id=attendance.id,
                student_id=attendance.student_id,
                student_name=student_name,  # Agregar nombre del estudiante
                status=attendance.status,
                timestamp=attendance.timestamp,
            )

    @strawberry.field
    async def get_all_attendances(self) -> List[AttendanceType]:
        async with get_db() as session:
            result = await session.execute(select(Attendance))
            attendances = result.scalars().all()
            
            attendance_list = []
            for a in attendances:
                student_name = await fetch_student_name(a.student_id)
                attendance_list.append(
                    AttendanceType(
                        id=a.id,
                        student_id=a.student_id,
                        student_name=student_name,  # Agregar nombre del estudiante
                        status=a.status,
                        timestamp=a.timestamp,
                    )
                )
            return attendance_list

@strawberry.type
class Mutation:
    @strawberry.mutation
    async def add_attendance(self, student_id: int, status: str) -> AttendanceType:
        async with get_db() as session:
            new_attendance = Attendance(student_id=student_id, status=status)
            session.add(new_attendance)
            await session.commit()
            await session.refresh(new_attendance)
            return AttendanceType(
                id=new_attendance.id,
                student_id=new_attendance.student_id,
                student_name=await fetch_student_name(new_attendance.student_id),
                status=new_attendance.status,
                timestamp=new_attendance.timestamp
            )

schema = strawberry.Schema(query=Query, mutation=Mutation)
