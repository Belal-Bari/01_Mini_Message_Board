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
            step {
                echo 'Checking pwd'
                sh '''
                    node -v
                    npm run 
                '''
            }
        }
        stage('Test') {
            step {
                sh 'curl http://localhost:3001/'
            }
        }
    }
}