from flask import Blueprint, jsonify
from sqlalchemy import text
from db import get_db

bp = Blueprint("delete_teachers", __name__)

@bp.route("/<int:teacher_id>", methods=["DELETE"])
def delete_teacher(teacher_id):
    try:
        db = next(get_db())
        
        # Intentar eliminar el registro
        result = db.execute(
            text("DELETE FROM teachers WHERE id = :id"),
            {"id": teacher_id}
        )
        db.commit()
        
        # Comprobar si se eliminó algún registro
        if result.rowcount == 0:
            return jsonify({"error": "Profesor no encontrado"}), 404

        return jsonify({"message": "Profesor eliminado exitosamente"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

