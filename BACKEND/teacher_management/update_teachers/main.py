from fastapi import FastAPI
from routes.teacher_update_routes import router as teacher_update_router

app = FastAPI()
##Se logro el despliegue 
app.include_router(teacher_update_router, prefix="/api/v1")
