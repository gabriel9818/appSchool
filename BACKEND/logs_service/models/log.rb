require 'sinatra/activerecord'

class Log < ActiveRecord::Base
  validates :user_id, presence: true
  validates :action, presence: true
end
