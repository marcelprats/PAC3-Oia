document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".highlight-image img");

    stars.forEach((star) => {
        // Crea el recuadre popup
        const popupRectangle = document.createElement("div");
        popupRectangle.classList.add("popup-rectangle");
        popupRectangle.style.backgroundImage = `url(${star.src})`; // Assigna la mateixa imatge de l'estrella
        document.body.appendChild(popupRectangle);

        // Funció per mostrar el recuadre
        const showPopup = () => {
            star.classList.add("hidden"); // Amaga l'estrella
            popupRectangle.classList.add("visible"); // Mostra el recuadre
        };

        // Funció per ocultar el recuadre
        const hidePopup = () => {
            star.classList.remove("hidden"); // Torna a mostrar l'estrella
            popupRectangle.classList.remove("visible"); // Oculta el recuadre
        };

        // Esdeveniment per mostrar el recuadre quan el ratolí entra a l'estrella
        star.addEventListener("mouseover", showPopup);

        // Esdeveniments per ocultar el recuadre quan el ratolí surt del recuadre
        popupRectangle.addEventListener("mouseleave", hidePopup);
    });
});