document.addEventListener('DOMContentLoaded', () => {
    const botonesAcordeon = document.querySelectorAll('.acordeon-titulo');

    botonesAcordeon.forEach(boton => {
        boton.addEventListener('click', () => {
            // El botón actual
            const isActive = boton.classList.contains('active');

            // Cerrar todos los demás (para que solo se mantenga uno abierto)
            botonesAcordeon.forEach(b => {
                b.classList.remove('active');
                const contenido = b.nextElementSibling;
                contenido.style.maxHeight = null;
                contenido.style.paddingTop = '0';
                contenido.style.paddingBottom = '0';
            });

            // Si no estaba activo, lo abrimos
            if (!isActive) {
                boton.classList.add('active');
                const contenido = boton.nextElementSibling;
                // La altura de desplazamiento del contenido para la transición
                contenido.style.maxHeight = contenido.scrollHeight + "px";
                contenido.style.paddingTop = '15px';
                contenido.style.paddingBottom = '15px';
            }
        });
    });
});
