from flask import Blueprint, request, jsonify
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

# Configuración de la base de datos
db_config = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_DATABASE"),
}

create_materials = Blueprint("create_materials", __name__)

@create_materials.route("/api/create", methods=["POST"])
def create():
    data = request.json
    nombre = data.get("nombre")
    descripcion = data.get("descripcion")
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        query = "INSERT INTO materiales (nombre, descripcion) VALUES (%s, %s)"
        cursor.execute(query, (nombre, descripcion))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Material creado exitosamente"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
