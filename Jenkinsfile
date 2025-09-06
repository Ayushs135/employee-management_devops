pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Ayushs135/employee-management_devops.git', branch: 'main'
            }
        }

        stage('Build & Test Backend + Frontend') {
            steps {
                dir("backend") {
                    sh 'mvn clean install -DskipTests'
                    sh 'mvn test'
                }
                dir("frontend") {
                    sh 'npm install'
                    sh 'CI=false npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t employee-app .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag employee-app $DOCKER_USER/employee-app'
                    sh 'docker push $DOCKER_USER/employee-app'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage can be configured for Render or another cloud provider'
            }
        }
    }
}

