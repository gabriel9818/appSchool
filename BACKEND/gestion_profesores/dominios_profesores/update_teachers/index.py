from flask import Blueprint, request, jsonify
from db import get_db
from sqlalchemy.exc import SQLAlchemyError

bp = Blueprint('update_teacher', __name__)

@bp.route("/<int:id>", methods=["PUT"])
def update_teacher(id):
    data = request.get_json()
    name = data.get("name")
    subject = data.get("subject")
    email = data.get("email")

    if not all([name, subject, email]):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        db = next(get_db())
        result = db.execute(
            "UPDATE teachers SET name = :name, subject = :subject, email = :email WHERE id = :id",
            {"name": name, "subject": subject, "email": email, "id": id},
        )
        db.commit()
        if result.rowcount == 0:
            return jsonify({"error": "Teacher not found"}), 404
        return jsonify({"message": "Teacher updated"}), 200
    except SQLAlchemyError as e:
        return jsonify({"error": str(e)}), 500
