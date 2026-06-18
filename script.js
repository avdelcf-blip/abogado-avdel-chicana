// Esperar a que todo el contenido HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Obtener el formulario de contacto
    const formularioContacto = document.getElementById('formulario-contacto');

    // Escuchar el evento de envío (submit) del formulario
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(evento) {
            // Prevenir que la página se recargue al enviar
            evento.preventDefault();
            
            // Aquí puedes integrar la lógica real de envío al servidor en el futuro.
            // Por ahora, mostraremos un mensaje de confirmación al usuario.
            alert('¡Gracias por tu mensaje! El formulario está listo para ser integrado con un servidor.');
            
            // Opcional: Limpiar los campos del formulario tras el envío
            formularioContacto.reset();
        });
    }
});