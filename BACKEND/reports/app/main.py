from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator
from .routes import report_routes
from .models.database import Base, engine

# Initialize database schema
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include routes
app.include_router(report_routes.router)

# Enable Prometheus metrics
Instrumentator().instrument(app).expose(app)

@app.get("/")
def read_root():
    """
    Root endpoint to check service status.
    """
    return {"message": "Reports Materials microservice is running"}
