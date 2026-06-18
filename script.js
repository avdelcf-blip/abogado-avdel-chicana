// Manejo del envío del formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar los datos si lo deseas en el futuro
    alert('¡Gracias por su mensaje! Nos pondremos en contacto con usted a la brevedad.');
    this.reset();
});