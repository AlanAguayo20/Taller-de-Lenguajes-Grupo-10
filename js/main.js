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

//formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let juego = document.getElementById("juego").value;

    let respuesta = document.getElementById("respuesta");


    if(nombre.length < 3){
        respuesta.textContent = "El nombre debe tener al menos 3 caracteres.";
        respuesta.style.color = "red";
        return;
    }


    if(!email.includes("@")){
        respuesta.textContent = "Ingresá un correo válido.";
        respuesta.style.color = "red";
        return;
    }


    if(juego === ""){
        respuesta.textContent = "Seleccioná un juego.";
        respuesta.style.color = "red";
        return;
    }


    respuesta.textContent = "✅ ¡Inscripción enviada correctamente!";
    respuesta.style.color = "green";

    formulario.reset();

});

