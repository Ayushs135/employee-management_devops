# 🧑‍💼 Employee Management System (Full Stack + CI/CD)

A full-stack Employee Management System built with **React, Spring Boot, and PostgreSQL**, integrated with a complete **CI/CD pipeline** and **monitoring stack**.

---

## ❓ Why This Project?

This project was built to understand how real-world applications are developed, deployed, and monitored using modern DevOps practices.

## 🚀 Features

* ➕ Add Employee
* ✏️ Edit Employee
* ❌ Delete Employee
* 📋 View Employee List
* 🔄 REST API integration
* ⚙️ CI/CD pipeline with Jenkins
* 🐳 Docker containerization
* 📊 Monitoring with Grafana & Graphite

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Spring Boot
* REST APIs

### Database

* PostgreSQL

### DevOps & Monitoring

* Docker
* Jenkins
* Grafana
* Graphite

---

## 🧱 System Architecture

Frontend (React) → Backend (Spring Boot API) → PostgreSQL
CI/CD Pipeline → Jenkins
Monitoring → Grafana + Graphite

---

## 📷 Screenshots

(Add these — VERY IMPORTANT)

* Home Page
* Add Employee Form
* Dashboard / Table View
* Grafana Dashboard

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ayushs135/employee-management_devops.git
cd employee-management_devops
```

### 2️⃣ Backend Setup

```bash
cd backend
mvn spring-boot:run
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

### 4️⃣ Database Setup

* Install PostgreSQL
* Create database
* Update `application.properties`

---

## 🔄 CI/CD Pipeline

* Code pushed to GitHub triggers Jenkins
* Jenkins builds backend using Maven
* Docker image is created
* Application is deployed automatically

---

## 📊 Monitoring

* Metrics collected using Graphite
* Visualized using Grafana dashboards
* Tracks system performance and application health

---

## 🧠 What I Learned

* Building scalable full-stack applications
* Integrating CI/CD pipelines
* Containerization using Docker
* Monitoring distributed systems

---

## 📈 Future Improvements

* 🔐 Add authentication (JWT)
* 🌐 Deploy on cloud (AWS / GCP)
* 📊 Advanced analytics dashboard
* 🧪 Add unit & integration testing

---

## 🤝 Contributing

Feel free to fork and improve the project!

---

⭐ If you like this project, give it a star!
