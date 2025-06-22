pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'employee-frontend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Ayushs135/employee-management_devops.git', branch: 'main'
            }
        }

        stage('Build Backend') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'mvn test'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t employee-app-backend ./backend'
                sh 'docker build -t employee-app-frontend ./employee-frontend'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag employee-app-backend $DOCKER_USER/employee-app-backend'
                    sh 'docker push $DOCKER_USER/employee-app-backend'

                    sh 'docker tag employee-app-frontend $DOCKER_USER/employee-app-frontend'
                    sh 'docker push $DOCKER_USER/employee-app-frontend'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'You can define deployment with Docker Compose, Kubernetes, etc.'
            }
        }
    }
}

