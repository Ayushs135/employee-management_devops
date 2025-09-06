# =========================
# 1. Build React Frontend
# =========================
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# =========================
# 2. Build Spring Boot Backend (with frontend included)
# =========================
FROM maven:3.9.6-eclipse-temurin-17 AS backend-build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src

# Copy React build into Spring Boot resources/static
COPY --from=frontend-build /app/frontend/build ./src/main/resources/static

RUN mvn clean package -DskipTests

# =========================
# 3. Final Image
# =========================
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY --from=backend-build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

