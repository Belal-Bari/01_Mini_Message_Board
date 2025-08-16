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
                    npm run 
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