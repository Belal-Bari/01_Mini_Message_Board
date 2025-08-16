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
                    node app.js > app.log 2>&1 &
                    sleep 5
                    apk add --no-cache curl
                    curl http://localhost:3001/
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'ls -la'
            }
        }
    }
}