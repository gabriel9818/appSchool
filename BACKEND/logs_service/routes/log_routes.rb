require 'sinatra'
require_relative '../models/log'

class LogRoutes < Sinatra::Base
  before do
    content_type 'application/json'
  end

  # Endpoint para guardar un log
  post '/logs' do
    data = JSON.parse(request.body.read)

    user_id = data['user_id']
    action = data['action']
    details = data['details']

    if user_id.nil? || action.nil?
      status 400
      return { error: 'user_id y action son obligatorios' }.to_json
    end

    result = Log.save(user_id, action, details)
    status 201
    result.to_json
  end
end
