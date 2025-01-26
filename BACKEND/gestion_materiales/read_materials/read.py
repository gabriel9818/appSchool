from flask import Blueprint, jsonify
from db import get_connection

read_materials = Blueprint("read_materials", __name__)

@read_materials.route("/api/read", methods=["GET"])
def read_all():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM materiales")
        rows = cursor.fetchall()
        return jsonify(rows), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@read_materials.route("/api/read/<int:id>", methods=["GET"])
def read_by_id(id):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM materiales WHERE id = %s", (id,))
        row = cursor.fetchone()
        if not row:
            return jsonify({"message": "Material no encontrado"}), 404
        return jsonify(row), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()
