require 'sinatra'
require 'dotenv/load'
require_relative 'routes/log_routes'

# Cargar las rutas
use LogRoutes

# Ruta base para verificar si el servicio está activo
get '/' do
  { message: 'Microservicio de Logs Activo' }.to_json
end
