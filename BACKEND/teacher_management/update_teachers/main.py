from fastapi import FastAPI
from routes.teacher_update_routes import router as teacher_update_router

app = FastAPI()
##API 3
app.include_router(teacher_update_router, prefix="/api/v1")
