from fastapi import FastAPI
from routes.teacher_delete_routes import router
from db.database import Base, engine

# Crear las tablas si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Registrar rutas delete
app.include_router(router, prefix="/api/v1")
