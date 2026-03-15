console.log('script.js caricato');

function inviaForm(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const domanda = document.getElementById('domanda').value;

    if (!nome || !email || !domanda) {
        alert('Per favore compila tutti i campi!');
        return;
    }

    alert(`Grazie ${nome}! La tua domanda è stata inviata. Ti risponderemo a ${email}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('faq-form');
    if (form) {
        form.addEventListener('submit', inviaForm);
    }
});

