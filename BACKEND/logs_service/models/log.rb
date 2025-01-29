require 'pg'

class Log
  def self.save(user_id, action, details)
    begin
      conn = PG.connect(
        dbname: ENV['DB_NAME'],
        user: ENV['DB_USER'],
        password: ENV['DB_PASS'],
        host: ENV['DB_HOST']
      )

      query = <<-SQL
        INSERT INTO logs (user_id, action, details, created_at, updated_at)
        VALUES ($1, $2, $3, NOW(), NOW())
      SQL

      conn.exec_params(query, [user_id, action, details])
      conn.close

      { message: 'Log guardado exitosamente' }
    rescue PG::Error => e
      { error: e.message }
    end
  end
end
