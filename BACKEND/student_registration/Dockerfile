# Usar una imagen oficial de PHP con Apache
FROM php:8.1-apache

# Establecer el directorio de trabajo en el contenedor
WORKDIR /var/www/html

# Instalar extensiones y dependencias de PHP necesarias
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

# Copiar los archivos de la aplicación al contenedor
COPY . /var/www/html

# Dar permisos correctos a la carpeta de la aplicación
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html

# Habilitar módulos de Apache y configuración de permisos
RUN a2enmod rewrite

# Configurar el ServerName en Apache para evitar el error
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Instalar dependencias de Composer
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# Exponer el puerto en el que correrá Apache
EXPOSE 80

# Mantener Apache ejecutándose en Foreground
CMD ["apachectl", "-D", "FOREGROUND"]
