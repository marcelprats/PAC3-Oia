document.addEventListener("DOMContentLoaded", ()=>{
    const button = document.getElementById("changeBackground");
    const colors = [
        "#f6d365",
        "#fda085",
        "#a1c4fd",
        "#c2e9fb",
        "#ff9a9e",
        "#fad0c4"
    ];
    button.addEventListener("click", ()=>{
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});

//# sourceMappingURL=index.aa69868b.js.map
