# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo package.json y package-lock.json para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install --only=production

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3006

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]