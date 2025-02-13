from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class Report(Base):
    """
    Report model representing stored reports in the database.
    """
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    subject_id = Column(String(255), nullable=False)  # Subject identifier
    generated_at = Column(DateTime, default=datetime.utcnow)  # Timestamp of report generation
    report_data = Column(String(5000), nullable=False)  # JSON formatted report data

    def __repr__(self):
        return f"<Report subject_id={self.subject_id} generated_at={self.generated_at}>"
