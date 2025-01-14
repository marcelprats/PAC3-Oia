document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el mapa centrado en Oia, Santorini
    const map = L.map('map').setView([36.4613, 25.3758], 15);

    // Añade el mapa de OpenStreetMap como fondo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lista de puntos de interés en Oia
    const pointsOfInterest = [
        { name: "Castillo de Oia", coords: [36.4625, 25.3724], description: "Famoso por sus vistas al atardecer.", link: "detall.html" },
        { name: "Iglesia de Cúpula Azul", coords: [36.4618, 25.3758], description: "Ícono de Santorini.", link: "detall.html" },
        { name: "Museo Naval de Oia", coords: [36.4632, 25.3779], description: "Exhibe la historia marítima de Santorini.", link: "detall.html" }
    ];

    // Agrega un marcador y popup para cada punto de interés
    pointsOfInterest.forEach(point => {
        L.marker(point.coords)
            .addTo(map)
            .bindPopup(`<b>${point.name}</b><br>${point.description}<br><a href="${point.link}">Leer más</a>`);
    });
});