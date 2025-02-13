from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..models.database import get_db
from ..controllers.report_controller import generate_report
from ..models.report import Report

router = APIRouter()

@router.get("/reports/{subject_id}")
def get_report(subject_id: str, db: Session = Depends(get_db)):
    """
    Generates and returns a report of materials by subject.
    :param subject_id: The subject identifier to filter materials.
    :param db: Database session dependency.
    :return: JSON response with the generated report.
    """
    report = generate_report(db, subject_id)
    return {"message": "Report generated", "report": report}
