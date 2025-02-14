![LogoAppSchool](https://github.com/gabitla/Example-of-README/blob/main/LogoAppSchool.jpg)

## Table of Contents 📋
- [Table of Contents 📋](#table-of-contents-)
- [Description 🏫](#description-)
- [Project Status](#project-status)
- [Key Features](#key-features)
- [Architecture and Technologies 👩‍💻](#architecture-and-technologies-)
  - [Microservices](#microservices)
  - [Programming Languages](#programming-languages)
  - [Databases](#databases)
  - [AWS Services](#aws-services)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Docker Compose Configuration](#docker-compose-configuration)
- [Credits ](#credits-)
- [Contact](#contact)

---

## Description 🏫
AppSchool is a system designed to optimize the administration and organization of small schools and academies, offering an integrated solution that centralizes academic and administrative processes. Focused on digitization and modernization, it aims to solve common problems such as information dispersion, manual processes, and inefficient communication.

---

## Project Status
The project is currently under development.

---

## Key Features
1. **User Management**: Registration and management of students and teachers.
2. **Grades and Attendance**: Detailed and real-time tracking.
3. **Schedules and Courses**: Efficient planning to optimize time.
4. **Communication**: Interactive chat, real-time notifications, and email alerts.
5. **Report Generation**: Academic performance analysis with automated reports.

---

## Architecture and Technologies 👩‍💻

![arquitecture_appschool](https://github.com/gabitla/Example-of-README/blob/main/app_arquitecture2.jpg)

### Microservices
The system is designed as a microservice-based architecture deployed on AWS. The microservices include:
- User Management
- Authentication and Authorization
- Student Registration
- Teacher Management
- Course and Subject Management
- Schedule Management
- Grades Management
- Academic History for Students
- Attendance Tracking
- Real-Time Notifications
- Chat for Teachers and Students
- School Events Management
- Frequently Accessed Cache
- Activity Logs System
- Search for Students and Teachers
- Document Upload and Download
- Educational Material Management
- Email Notifications
- Automatic Evaluation System
- Report Generation

### Programming Languages
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
- ![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
- ![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
- ![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

### Databases
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
- ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
- ![Redshift](https://img.shields.io/badge/Redshift-8C2A00?style=for-the-badge&logo=amazonredshift&logoColor=white)
- ![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white)

### AWS Services
![AWS Services](https://img.shields.io/badge/AWS_Services-orange?style=for-the-badge&logo=amazon)

- **Load Balancer** for load balancing
- **API Gateway** for centralized request handling
- **S3** for backup storage
- **Auto Scaling Group** for scalability


---

## Installation

### Prerequisites
- Docker and Docker Compose installed.
- AWS account configured.

### Clone the Repository
Clone the project from GitHub:
```bash
git clone https://github.com/gabriel9818/appSchool.git
```

### Docker Compose Configuration
Run the following command to start the microservices (fill in configurations as needed):
```bash
docker-compose up -d
```

Example `docker-compose.yml` file:
```yaml
version: '3.8'
services:
  appschool-auth:
    image: appschool/auth-service
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://username:password@host:port/dbname

  appschool-courses:
    image: appschool/course-service
    ports:
      - "5001:5001"
```

---

## Credits <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60">
- Gabriel Ruales
- Gabriela Tumbaco

---

## Contact
Official repository: [GitHub](https://github.com/gabriel9818/appSchool)
