// alert("Hola este es mi Javascript");

// let Name = "Juan";

// console.log(Name);

/*

let textTitulo = "Mi pagina";
let title = document.querySelector("#title");
title.innerHTML = textTitulo;

//Condicional 
let text = title.innerText;
console.log(text);
if (text == "Mi pagina") {
    title.innerHTML = "My website"
} else {
    console.log('No se cambio el nombre')
}

//Funcion

let frase = "Carpe diem";

let parrafo = document.querySelector("#parrafo1")
console.log(parrafo)
function cambio(frase) {
    let contenido = `${frase}, amet consectetur adipisicing elit. 
    Totam iure quae autem.
    Exercitationemtenetur saepe expedita debitis cupiditate distinctio 
    ipsam magni vero sapiente repellenduseos,
    aliquid rerum quia aspernatur. Ab.`;

    return contenido;
}

parrafo.innerText = cambio(frase)

// Menu responsive
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
};

console.log(navbar);
*/

// --------------PARA EL FORMULARIO------------------------

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alerta");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); 
        // Evita que el formulario se envíe automáticamente
    }
});
