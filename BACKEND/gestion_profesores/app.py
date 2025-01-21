from flask import Flask
from dominios_profesores.created_teachers.index import bp as create_teacher_bp
from dominios_profesores.read_teachers.index import bp as read_teacher_bp
from dominios_profesores.update_teachers.index import bp as update_teacher_bp
from dominios_profesores.delete_teachers.index import bp as delete_teacher_bp

app = Flask(__name__)

# Registrar microservicios
app.register_blueprint(create_teacher_bp, url_prefix="/api/create")
app.register_blueprint(read_teacher_bp, url_prefix="/api/read")
app.register_blueprint(update_teacher_bp, url_prefix="/api/update")
app.register_blueprint(delete_teacher_bp, url_prefix="/api/delete")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
