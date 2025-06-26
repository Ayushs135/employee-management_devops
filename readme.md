# 👨‍💼 Employee Management System - DevOps CI/CD Project

This project demonstrates a full-stack Employee Management System integrated with a complete DevOps CI/CD pipeline. It automates the building, testing, and containerization of a Spring Boot + React application using Jenkins, Docker, and enables performance monitoring with Graphite and Grafana.

---

## 🚀 Project Objective

To build a web-based Employee Management System and implement a DevOps pipeline that automates build, test, containerization, and monitoring using modern DevOps tools and practices.

---

## 🛠️ Tech Stack Used

- **Frontend**: React (with Bootstrap)
- **Backend**: Spring Boot (Java) + PostgreSQL
- **Build/Test Tools**: Maven, JUnit
- **Containerization**: Docker
- **CI/CD Pipeline**: Jenkins
- **Monitoring**: Graphite + Grafana
- **Source Control**: Git + GitHub

---

## 🧱 Project Structure

```bash
employee-management/
├── backend/              # Spring Boot REST API
├── frontend/             # React UI
├── monitoring/           # Docker Compose config for Grafana & Graphite
├── Jenkinsfile           # CI/CD Pipeline Script
└── README.md             # Project Overview
```

---

## ⚙️ Features

- Add, edit, and delete employee records.
- RESTful API backend with PostgreSQL database.
- Responsive React frontend.
- CI/CD pipeline with Jenkins.
- Dockerized frontend and backend.
- Monitoring with Graphite and Grafana dashboards.

---

## 🐳 Docker Setup

To build and run the Docker containers:

```bash
# Build and run Grafana & Graphite
cd monitoring
docker-compose up -d

# Backend
cd backend
docker build -t employee-app-backend .
docker run -p 8081:8081 employee-app-backend

# Frontend
cd frontend
docker build -t employee-app-frontend .
docker run -p 3000:80 employee-app-frontend
```

---

## 🔧 Jenkins Pipeline

The `Jenkinsfile` automates:

- Cloning the repository
- Installing dependencies
- Running backend tests
- Building Docker images
- Pushing images to DockerHub
- (Optional) Deployment stage

---

## 📊 Monitoring

- **Graphite** collects metrics from Spring Boot via Micrometer.
- **Grafana** visualizes real-time application metrics.
- Accessible on:
  - Grafana: [http://localhost:3000](http://localhost:3000)
  - Graphite: [http://localhost:80](http://localhost:80)

---

## 📄 Conclusion

This project illustrates how a modern full-stack application can be developed and deployed efficiently with CI/CD practices and monitoring, promoting automation, reliability, and performance visibility.

---

## 📬 Contact

Created by **Ayush Shukla**\
Feel free to contribute or raise issues.


