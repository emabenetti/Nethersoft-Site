// Script en vanilla JS para el hamburger menu

document.addEventListener('DOMContentLoaded', () => {

    // Busca todos los elementos "navbar-burger" del documento y los guarda en una variable
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Si la variable es mayor que cero (osea que encontró un navburguer)
    if ($navbarBurgers.length > 0) {

        // Le agrega un evento de click a cada navburguer
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Busca el atributo "data-target" (que en este caso es el resto del topnav)
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Activa la clase "is-active" en el "navbar-burger" y en el "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});