# Imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3004

# Comando de inicio
CMD ["node", "index.js"]
