// js/main.js
// El JS solo alterna una clase en el body.
// Todos los colores del modo claro están definidos en el CSS (clase .claro)

const boton = document.getElementById("btn-modo");

// Al cargar la página, aplicar el modo que quedó guardado de la visita anterior
if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    boton.textContent = "🌙";
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        boton.textContent = "🌙";
        localStorage.setItem("tema", "claro");
    } else {
        boton.textContent = "☀️";
        localStorage.setItem("tema", "oscuro");
    }
});
