from fastapi import FastAPI
from routes.teacher_routes import router
from db.database import Base, engine

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Incluir las rutas
app.include_router(router, prefix="/api/v1")
