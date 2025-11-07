document.addEventListener('DOMContentLoaded', () => {
    const botonesAcordeon = document.querySelectorAll('.acordeon-titulo');

    botonesAcordeon.forEach(boton => {
        boton.addEventListener('click', () => {
            const isActive = boton.classList.contains('active');
            
            // Cerrar todos los demás
            botonesAcordeon.forEach(b => {
                b.classList.remove('active');
                const contenido = b.nextElementSibling;
                // CAMBIO JS: Eliminamos padding para que la transición CSS solo maneje la altura
                contenido.style.maxHeight = null;
                contenido.style.paddingTop = '0'; 
                contenido.style.paddingBottom = '0';
            });

            // Si no estaba activo, lo abrimos
            if (!isActive) {
                boton.classList.add('active');
                const contenido = boton.nextElementSibling;
                // CAMBIO JS: Añadimos padding para que el contenido se separe visualmente
                contenido.style.maxHeight = contenido.scrollHeight + 30 + "px"; // +30px para el padding
                contenido.style.paddingTop = '15px';
                contenido.style.paddingBottom = '15px';
            }
        });
    });
});
