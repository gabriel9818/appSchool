require 'sinatra'
require_relative '../models/log'

class LogRoutes < Sinatra::Base
  before do
    content_type 'application/json'
  end

  get '/logs' do
    logs = Log.all
    logs.to_json
  end

  post '/logs' do
    data = JSON.parse(request.body.read)

    log = Log.new(
      user_id: data['user_id'],
      action: data['action'],
      details: data['details']
    )

    if log.save
      status 201
      log.to_json
    else
      status 400
      { error: 'No se pudo registrar el log' }.to_json
    end
  end
end
