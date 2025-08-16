pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'Checking pwd'
                sh '''
                    node -v
                    nohup node app.js 
                    sleep 5
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'curl http://localhost:3001/'
            }
        }
    }
}