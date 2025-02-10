# Imagen base de PHP con Apache
FROM php:8.1-apache

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    libonig-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo_mysql

# Instalar Composer manualmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar archivos de la aplicación
WORKDIR /var/www/html
COPY . /var/www/html

# Asegurar permisos correctos
RUN chown -R www-data:www-data /var/www/html && chmod -R 775 /var/www/html

# Instalar dependencias de Composer
RUN composer install --no-dev --prefer-dist --optimize-autoloader --verbose

# Exponer el puerto 8000
EXPOSE 8000

# Iniciar el servidor Apache
CMD ["apache2-foreground"]
