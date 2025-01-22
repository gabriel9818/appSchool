# Usar la imagen base de Go
FROM golang:1.20

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Descargar las dependencias
RUN go mod tidy

# Compilar la aplicación
RUN go build -o main .

# Exponer el puerto 8080
EXPOSE 8080

# Ejecutar la aplicación
CMD ["./main"]
