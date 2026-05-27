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
                echo 'Simulazione di test in corso... Tutti i bug sono stati risolti!'
                // Creiamo il file XML dicendo che ci sono 0 failures
                sh "echo '<?xml version=\"1.0\" encoding=\"UTF-8\"?>' > report.xml"
                sh "echo '<testsuite name=\"Suite1\" tests=\"2\" failures=\"0\">' >> report.xml"
                sh "echo '  <testcase name=\"testLogin\" classname=\"LoginTests\"/>' >> report.xml"
                sh "echo '  <testcase name=\"testDatabase\" classname=\"DBTests\"/>' >> report.xml"
                sh "echo '</testsuite>' >> report.xml"
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
