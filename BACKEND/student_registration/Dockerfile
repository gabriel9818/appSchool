# Usar la imagen base de PHP con FPM
FROM php:8.1-fpm

# Establecer el directorio de trabajo en el contenedor
WORKDIR /var/www/html

# Instalar extensiones necesarias de PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar los archivos de la aplicación
COPY . /var/www/html

# Instalar dependencias de Composer
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# Dar permisos correctos
RUN chown -R www-data:www-data /var/www/html && chmod -R 775 /var/www/html

# Exponer puerto de PHP-FP
EXPOSE 9000

CMD ["php-fpm"]
