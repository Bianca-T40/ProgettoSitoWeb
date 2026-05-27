pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                // Scarica in automatico il codice da GitHub dentro Jenkins
                checkout scm
            }
        }
        stage('Esecuzione Test Unitari') {
            steps {
                echo 'Simulazione di test in corso...'
                // Crea un finto report XML con 1 test fallito (failures="1")
                sh """
                cat <<EOF > report.xml
                <?xml version="1.0" encoding="UTF-8"?>
                <testsuite name="Suite1" tests="2" failures="1">
                    <testcase name="testLogin" classname="LoginTests"/>
                    <testcase name="testDatabase" classname="DBTests">
                        <failure message="Timeout connessione">Il database non ha risposto entro 500ms.</failure>
                    </testcase>
                </testsuite>
EOF
                """
            }
        }
        stage('Pubblicazione Risultati') {
            steps {
                // Il plugin legge l'XML ed elabora i grafici
                junit 'report.xml'
            }
        }
    }
    post {
        always {
            echo "Pipeline conclusa. Stato finale: ${currentBuild.result}"
        }
    }
}
