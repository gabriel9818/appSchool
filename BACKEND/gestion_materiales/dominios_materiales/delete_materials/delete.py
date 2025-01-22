from flask import Blueprint, jsonify
from db import get_connection

delete_materials = Blueprint("delete_materials", __name__)

@delete_materials.route("/api/delete/<int:id>", methods=["DELETE"])
def delete(id):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM materiales WHERE id = %s", (id,))
        conn.commit()
        if cursor.rowcount == 0:
            return jsonify({"message": "Material no encontrado"}), 404
        return jsonify({"message": "Material eliminado"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()
