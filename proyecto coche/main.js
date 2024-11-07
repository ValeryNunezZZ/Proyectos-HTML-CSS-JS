let lines = document.querySelector(".ham");
let opciones = document.querySelector(".nav__opciones");
let abierto = false;

lines.addEventListener("click", ()=>{
    if(abierto == false){
        opciones.classList.add("nav__animated__open");
        abierto = true;
    }else{
        alert("j")
        opciones.classList.remove("nav__animated__open");
        opciones.classList.add("nav__animated__remove");
        abierto = false;
    }
});
