document.addEventListener("DOMContentLoaded", function(){
    let saludar = document.getElementById("boton-saludar");
    saludar.addEventListener("click", function(){
        alert("Hola");
    })


let divBoton = document.getElementById("div-container");
    divBoton.addEventListener("click", function(){
        alert("Hola soy el div")
    })

})
