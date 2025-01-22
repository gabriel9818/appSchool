from flask import Blueprint, request, jsonify
from db import get_connection

update_materials = Blueprint("update_materials", __name__)

@update_materials.route("/api/update/<int:id>", methods=["PUT"])
def update(id):
    data = request.json
    nombre = data.get("nombre")
    descripcion = data.get("descripcion")
    if not nombre or not descripcion:
        return jsonify({"error": "Faltan campos requeridos"}), 400
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE materiales SET nombre = %s, descripcion = %s WHERE id = %s",
            (nombre, descripcion, id)
        )
        conn.commit()
        if cursor.rowcount == 0:
            return jsonify({"message": "Material no encontrado"}), 404
        return jsonify({"message": "Material actualizado"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()
