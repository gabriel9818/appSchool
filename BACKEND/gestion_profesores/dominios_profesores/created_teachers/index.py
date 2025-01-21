from flask import Blueprint, request, jsonify
from sqlalchemy import text
from db import get_db

bp = Blueprint("create_teachers", __name__)

@bp.route("/", methods=["POST"])
def create_teacher():
    try:
        # Obtener los datos del cuerpo de la solicitud
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        subject = data.get("subject")

        # Validar que todos los campos estén presentes
        if not name or not email or not subject:
            return jsonify({"error": "Todos los campos (name, email, subject) son obligatorios"}), 400

        # Conectar a la base de datos
        db = next(get_db())
        
        # Insertar los datos en la tabla
        db.execute(
            text("INSERT INTO teachers (name, email, subject) VALUES (:name, :email, :subject)"),
            {"name": name, "email": email, "subject": subject}
        )
        db.commit()

        # Respuesta exitosa
        return jsonify({"message": "Profesor creado exitosamente"}), 201
    except Exception as e:
        # Manejo de errores
        return jsonify({"error": str(e)}), 500
