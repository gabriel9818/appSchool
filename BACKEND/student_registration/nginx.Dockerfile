# Usar la imagen base de Nginx
FROM nginx:latest

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 8000
EXPOSE 8000
