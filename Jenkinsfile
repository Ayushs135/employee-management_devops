pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Ayushs135/employee-management_devops.git', branch: 'main'
            }
        }

        stage('Build & Test Backend') {
            steps {
                dir("backend") {
                    sh 'mvn clean install -DskipTests'
                    sh 'mvn test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("frontend") {
                    sh 'npm install'
                    sh 'CI=false npm run build'
                }
            }
        }

        stage('Notify') {
            steps {
                echo 'Build and tests passed. Render will handle deployment automatically.'
            }
        }
    }
}

