# Usa una imagen oficial de PHP con Apache
FROM php:8.1-apache

# Establecer directorio de trabajo
WORKDIR /var/www/html

# Instalar extensiones y dependencias de PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    nano \
    vim \
    net-tools \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Habilitar módulos de Apache
RUN a2enmod rewrite

# Configurar el puerto en Apache
RUN echo "Listen 8000" > /etc/apache2/ports.conf

# Configurar Apache para servir desde public/
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Copiar los archivos de la aplicación
COPY . /var/www/html

# Ajustar permisos
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# Exponer el puerto 8000
EXPOSE 8000

# Mantener Apache ejecutándose en Foreground
CMD ["apachectl", "-D", "FOREGROUND"]
