# Logs Service

## Overview
The `logs_service` is a microservice designed to store logs related to user actions in the system. It is built using Ruby with the Sinatra framework and uses PostgreSQL as its database. The microservice provides an API endpoint to store logs efficiently.

## Features
- RESTful API using Sinatra.
- Database connection with PostgreSQL.
- Supports environment variables for database configuration.
- Uses Sinatra-ActiveRecord for database interactions.
- Implements structured logging for user activities.

## Prerequisites
To run this project, you need to have the following installed:
- [Ruby](https://www.ruby-lang.org/)
- [Bundler](https://bundler.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) (Optional for containerized deployment)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository/logs_service.git
   cd logs_service
   ```

2. Install dependencies:
   ```sh
   bundle install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```sh
   DB_HOST=your-database-host
   DB_NAME=your-database-name
   DB_USER=your-database-user
   DB_PASS=your-database-password
   ```

4. Run database migrations:
   ```sh
   rake db:migrate
   ```

## Usage

### Start the Service
Run the application locally:
```sh
ruby app.rb
```

### API Endpoints

#### Health Check
- **Endpoint:** `GET /`
- **Description:** Checks if the service is running.
- **Response:**
  ```json
  { "message": "Logs Service Active" }
  ```

#### Save a Log Entry
- **Endpoint:** `POST /logs`
- **Description:** Saves a user action log.
- **Request Body:**
  ```json
  {
    "user_id": 1,
    "action": "User logged in",
    "details": "Successful login from IP 192.168.1.1"
  }
  ```
- **Response:**
  ```json
  { "message": "Log saved successfully" }
  ```

## Running with Docker
To run the service inside a Docker container:
1. Build the Docker image:
   ```sh
   docker build -t logs_service .
   ```
2. Run the container:
   ```sh
   docker run -p 4567:4567 --env-file .env logs_service
   ```

## Project Structure
```
logs_service/
│── app.rb               # Main application file
│── Gemfile              # Dependencies configuration
│── Gemfile.lock         # Dependency versions
│── Rakefile             # Task manager
│── .gitignore           # Files to be ignored by Git
│── models/
│   └── log.rb           # Log model handling database operations
│── routes/
│   └── log_routes.rb    # API routes for logging
│── .env                 # Environment variables (not included in repo)
```
