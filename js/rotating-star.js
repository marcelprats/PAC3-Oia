document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".rotating-star");

    stars.forEach((star, index) => {
        let rotation = 0; // Angle inicial de rotació
        const initialSpeed = 5; // Velocitat inicial comuna per a totes les estrelles
        let currentSpeed = initialSpeed; // Velocitat actual
        const initialScale = 1; // Escala inicial
        let direction = 1; // Direcció de rotació (1 per sentit horari, -1 per sentit antihorari)
        let animationInProgress = false; // Controla si hi ha una animació en progrés

        // Funció per animar la rotació
        const rotateStar = () => {
            rotation += direction; // Increment de rotació segons la direcció
            star.style.transform = `rotate(${rotation}deg) scale(${initialScale + (50 - currentSpeed) / 100})`;
            setTimeout(rotateStar, currentSpeed);
        };

        // Comença la rotació
        rotateStar();

        // Funció per ajustar la velocitat i la mida progressivament
        const adjustSpeedAndSize = (targetSpeed, duration, reverse = false, reset = false) => {
            if (animationInProgress && !reset) return; // Evita conflictes si ja hi ha una animació en curs
            animationInProgress = true;

            const interval = 50; // Cada quant ajustem la velocitat (50ms)
            const steps = duration / interval; // Nombre de passos per fer l'ajust
            const speedStep = (targetSpeed - currentSpeed) / steps; // Increment de velocitat per pas

            if (reverse) direction = -1; // Canvia la direcció si cal girar cap a l'altre costat

            const adjust = setInterval(() => {
                currentSpeed += speedStep; // Ajustem la velocitat actual
                const scale = initialScale + (50 - currentSpeed) / 100; // Calcula la mida segons la velocitat
                star.style.transform = `rotate(${rotation}deg) scale(${scale})`; // Aplica la rotació i escala

                // Atura l'ajust quan arribem a la velocitat objectiu
                if ((speedStep > 0 && currentSpeed >= targetSpeed) || 
                    (speedStep < 0 && currentSpeed <= targetSpeed)) {
                    currentSpeed = targetSpeed; // Ens assegurem que arribem exactament a la velocitat desitjada
                    if (!reverse) direction = 1; // Torna a la direcció original si no és un gir invers
                    clearInterval(adjust); // Aturem l'ajust
                    animationInProgress = false; // Marca l'animació com completada
                }
            }, interval);
        };

        // Redueix la velocitat i fa l'estrella més petita progressivament
        star.addEventListener("mouseover", () => {
            adjustSpeedAndSize(50, 2000, index === 1); // Redueix la velocitat a 50ms, amb gir invers per l'estrella del mig
        });

        // Torna a la velocitat inicial i mida original progressivament
        star.addEventListener("mouseout", () => {
            adjustSpeedAndSize(initialSpeed, 2000, false, true); // Torna a la velocitat inicial en 2 segons
        });
    });
});
