# Usar una imagen base de PHP con Apache
FROM php:8.1-apache

# Instalar extensiones necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Habilitar mod_rewrite para Apache
RUN a2enmod rewrite

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html/

# Crear carpetas necesarias si no existen
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache

# Asignar permisos adecuados
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Instalar Composer y dependencias
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# Exponer el puerto de Apache (8000)
EXPOSE 8000

# Definir el comando de inicio del contenedor
CMD ["apache2-foreground"]
