from flask import Blueprint, jsonify
from sqlalchemy import text
from db import get_db

bp = Blueprint("read_teachers", __name__)

@bp.route("/", methods=["GET"])
def read_teachers():
    try:
        db = next(get_db())
        # Usa text() para la consulta SQL
        result = db.execute(text("SELECT * FROM teachers")).fetchall()
        
        # Convertir los resultados a una lista de diccionarios
        teachers = [dict(row._mapping) for row in result]
        
        return jsonify(teachers), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

