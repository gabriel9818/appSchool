# Imagen base
FROM python:3.9-slim

# Configuración de entorno
WORKDIR /app

# Instalar dependencias
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copiar el código
COPY . .

# Comando para iniciar la aplicación
CMD ["python", "app.py"]
