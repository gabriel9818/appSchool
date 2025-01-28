require 'sinatra'
require 'sinatra/activerecord'
require 'dotenv/load'
require_relative 'routes/log_routes'

set :database_file, 'config/database.yml'

use LogRoutes

get '/' do
  { message: 'Microservicio de Logs Activo' }.to_json
end
