from fastapi import FastAPI, HTTPException
import requests
from database import get_db_connection

# URL del microservicio `student_registration`
GRAPHQL_URL = "http://localhost:4000/graphql"

app = FastAPI()

# Función para obtener un estudiante desde `student_registration`
def get_student_by_id(student_id):
    query = """
    query GetStudent($id: ID!) {
        getStudentById(id: $id) {
            id
            name
        }
    }
    """
    variables = {"id": student_id}

    response = requests.post(GRAPHQL_URL, json={"query": query, "variables": variables})
    
    if response.status_code == 200:
        data = response.json()
        return data.get("data", {}).get("getStudentById")
    else:
        return None

# Endpoint para obtener asistencia de un estudiante
@app.get("/attendance/{student_id}")
def get_student_attendance(student_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Consultar microservicio `student_registration`
    student = get_student_by_id(student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    cursor.execute("SELECT id, student_id, date, status FROM attendance WHERE student_id = %s", (student_id,))
    records = cursor.fetchall()
    cursor.close()
    conn.close()

    return [
        {
            "id": row[0],
            "student_id": row[1],
            "date": str(row[2]),
            "status": row[3],
            "student_name": student["name"]
        }
        for row in records
    ]

# Endpoint para registrar asistencia
@app.post("/attendance/")
def register_attendance(student_id: int, status: str):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Consultar microservicio `student_registration`
    student = get_student_by_id(student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

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
        "date": str(new_record[2]),
        "status": new_record[3],
        "student_name": student["name"]
    }

@app.get("/")
def home():
    return {"message": "Attendance Microservice Running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
