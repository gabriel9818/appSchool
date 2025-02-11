from fastapi import FastAPI
from routes.teacher_delete_routes import router
from db.database import Base, engine

# created tables if no exists
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Registrar routes delete

app.include_router(router, prefix="/api/v1")
