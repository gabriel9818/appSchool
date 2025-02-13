import requests
import json
from sqlalchemy.orm import Session
from ..models.report import Report

# URL del microservicio read_materials
READ_MATERIALS_URL = "http://localhost:8081/materials"

def generate_report(db: Session, subject_id: str):
    """
    Generates a report of materials by subject and stores it in the database.
    """
    try:
        print(f"Fetching materials for subject_id: {subject_id}")
        response = requests.get(f"{READ_MATERIALS_URL}?subject_id={subject_id}")

        if response.status_code != 200:
            print(f"Error fetching data: {response.status_code} - {response.text}")
            return {"error": "Failed to retrieve data from read_materials"}

        materials = response.json()
        print("Materials received:", materials)  # Ver los datos recibidos

        report_data = json.dumps(materials)

        new_report = Report(subject_id=subject_id, report_data=report_data)
        db.add(new_report)
        db.commit()
        db.refresh(new_report)

        print("Report saved successfully")
        return new_report

    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return {"error": "Internal server error"}
