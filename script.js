document.getElementById('faq-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce alla pagina di ricaricarsi

    // Recupera i valori inseriti nei campi usando gli ID reali del tuo HTML
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const domanda = document.getElementById('domanda').value; 

    // Crea l'oggetto con i dati da inviare alla Lambda
    const datiForm = {
        nome: nome,
        email: email,
        domanda: domanda
    };

    // Il tuo Function URL di AWS Lambda funzionante
    const urlLambda = 'https://zptkvssotw5g4bivgrregrczu40abhdx.lambda-url.eu-north-1.on.aws/';

    // Invia i dati alla Lambda usando fetch
    fetch(urlLambda, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datiForm)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella risposta del server');
        }
        return response.json();
    })
    .then(data => {
        alert('Messaggio inviato con successo!');
        document.getElementById('faq-form').reset(); // Svuota i campi del form
    })
    .catch(error => {
        console.error('Errore:', error);
        alert('Si è verificato un errore durante l\'invio. Riprova più tardi.');
    });
});