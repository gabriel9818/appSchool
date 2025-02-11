from fastapi import FastAPI
from routes.teacher_read_routes import router
from db.database import Base, engine

# Crear tablas en la base de datos (si no existen)
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Registrar rutas a
app.include_router(router, prefix="/api/v1")
