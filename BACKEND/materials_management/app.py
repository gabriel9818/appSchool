from flask import Flask
from dominios_materiales.created_materials.create import create_materials
from dominios_materiales.read_materials.read import read_materials
from dominios_materiales.update_materials.update import update_materials
from dominios_materiales.delete_materials.delete import delete_materials

app = Flask(__name__)

# Registrar microservicios
app.register_blueprint(create_materials)
app.register_blueprint(read_materials)
app.register_blueprint(update_materials)
app.register_blueprint(delete_materials)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
