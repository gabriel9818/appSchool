from ariadne import QueryType, MutationType
from database import get_db_connection
from student_service import get_student_by_id

query = QueryType()
mutation = MutationType()

# Obtener asistencia de un estudiante
@query.field("getStudentAttendance")
def resolve_get_student_attendance(_, info, student_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Verificar si el estudiante existe en student_registration
    student = get_student_by_id(student_id)
    if not student:
        return {"error": "Student not found"}

    cursor.execute("SELECT id, student_id, date, status FROM attendance WHERE student_id = %s", (student_id,))
    records = cursor.fetchall()
    cursor.close()
    conn.close()
    
    return [{
        "id": row[0], 
        "student_id": row[1], 
        "date": row[2], 
        "status": row[3],
        "student_name": student["name"]  # Agregamos el nombre del estudiante
    } for row in records]

# Registrar asistencia
@mutation.field("registerAttendance")
def resolve_register_attendance(_, info, student_id, status):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Verificar si el estudiante existe en student_registration
    student = get_student_by_id(student_id)
    if not student:
        return {"error": "Student not found"}

    cursor.execute(
        "INSERT INTO attendance (student_id, date, status) VALUES (%s, NOW(), %s) RETURNING id, student_id, date, status",
        (student_id, status)
    )
    new_record = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()

    return {
        "id": new_record[0],
        "student_id": new_record[1],
        "date": new_record[2],
        "status": new_record[3],
        "student_name": student["name"]  # Agregamos el nombre del estudiante
    }
