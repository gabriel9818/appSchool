from fastapi import FastAPI
from routes.teacher_routes import router
from db.database import Base, engine

app = FastAPI()

# Crear tablas en la base de datos al iniciar
Base.metadata.create_all(bind=engine)
print("✅ Tablas creadas correctamente en la base de datos.")

# Incluir rutas
app.include_router(router, prefix="/api/v1")

@app.get("/")
def health_check():
    return {"message": "API is running"}
