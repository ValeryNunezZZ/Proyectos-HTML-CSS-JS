
//SELECCION FORZOZA DE JUGADOR (VALIDACIÓN)
//PONER QUÉ JUGADOR ES CUAL DENTRO DE LA RONDA


var initial = true;
var count = 0;
var rondaAct = 1;
var gana_x = 0;
var gana_o = 0;

var occupated_item_1 = false;
var occupated_item_2 = false;
var occupated_item_3 = false;
var occupated_item_4 = false;
var occupated_item_5 = false;
var occupated_item_6 = false;
var occupated_item_7 = false;
var occupated_item_8 = false;
var occupated_item_9 = false;

//false = cruz
//true = circuilo
var playerOne = false;
var playerTwo = false;
var numPartidas = 1;


var matriz = Array.from({ length: 3 }, () => Array(3).fill(0));

const modal = document.querySelector(".modal");
const item = document.querySelectorAll(".item");
const buttonStart = document.querySelector(".start");
const numRondas = document.querySelector(".num");
const equis = document.querySelector(".gana_x");
const circuilo = document.querySelector(".gana_o");
const body = document.querySelector(".body");
const restart = document.querySelector(".restart");
const modal_ganador = document.querySelector(".modal_ganador");
const empate = document.querySelector(".empate");
const empate_final = document.querySelector(".empate_final");


const cr1 = document.querySelector(".cruz_1")
const cr2 = document.querySelector(".cruz_2")
const ci1 = document.querySelector(".cir_1")
const ci2 = document.querySelector(".cir_2")



cr1.addEventListener("click", ()=>{
    cr1.classList.add("selected");
    ci2.classList.add("selected");

    ci1.classList.remove("selected");
    cr2.classList.remove("selected");

    playerOne = false;
    playerTwo = true;
})

cr2.addEventListener("click", ()=>{
    cr2.classList.add("selected");
    ci1.classList.add("selected");

    ci2.classList.remove("selected");
    cr1.classList.remove("selected");

    playerOne = true;
    playerTwo = false;
})

ci1.addEventListener("click", ()=>{
    ci1.classList.add("selected");
    cr2.classList.add("selected");

    ci2.classList.remove("selected");
    cr1.classList.remove("selected");

    playerOne = true;
    playerTwo = false;
})

ci2.addEventListener("click", ()=>{
    ci2.classList.add("selected");
    cr1.classList.add("selected");

    ci1.classList.remove("selected");
    cr2.classList.remove("selected");

    playerOne = false;
    playerTwo = true;
})


var playerOne = false;
var playerTwo = false;
var numPartidas = 1;
var entro = false;

const mensaje_container = document.querySelector(".mensaje_container");

buttonStart.addEventListener("click", ()=>{
/*

    if(!playerOne && !playerTwo){

        mensaje_container.innerHTML = "<h3 class='mensaje'>Favor de completar el formulario</h3>"

        mensaje_container.classList.add("mc_animation");

    }
 */
    
    numPartidas = document.querySelector(".par").value;

    modal.classList.add("desaparecer");

})

function reiniciarJuego(){

    count = 0;

    for(let i=0 ; i<9 ; i++){
        item[i].innerHTML = "";
    }

    occupated_item_1 = false;
    occupated_item_2 = false;
    occupated_item_3 = false;
    occupated_item_4 = false;
    occupated_item_5 = false;
    occupated_item_6 = false;
    occupated_item_7 = false;
    occupated_item_8 = false;
    occupated_item_9 = false;
}

function reiniciarMatriz(){
    for(let i=0 ; i<3 ; i++){
        for(let j=0 ; j<3 ; j++){
            matriz[i][j] = 0;
        }
    }
}

function nuevaPartida(){
    document.location.reload();
}

function nuevaRonda(){

    if(numPartidas == 0){
        
        var ganador;

        if(gana_x > gana_o){

            modal_ganador.classList.remove("modal_ganador_desaparecer");

            if(!playerOne){
                ganador = "jugador 1"
            }else{
                ganador = "jugador 2"
            }

            modal_ganador.innerHTML = `<div class='settings modal_gana'><h3>GANA</h3><span>${ganador}</span><div class='cruz cruz_2'>X</div><input class='restart' onclick='nuevaPartida()' type='submit' value='Restart'></div>`;

        }else if(gana_x < gana_o){

            modal_ganador.classList.remove("modal_ganador_desaparecer");

            if(playerOne){
                ganador = "jugador 1"
            }else{
                ganador = "jugador 2"
            }

            modal_ganador.innerHTML = `<div class='modal'><div class='settings modal_gana'><h3>GANA</h3><span>${ganador}</span><div class='cir cir_2'>O</div><input class='restart' onclick='nuevaPartida()' type='submit' value='Restart'></div></div>`

        }else{

            empate_final.classList.remove("modal_ganador_desaparecer");

            empate_final.innerHTML = `<div class="empate_container_final"><h2>Nadie gana</h2><div><img src="./IMG/tie_cat.webp"><input class='restart' onclick='nuevaPartida()' type='submit' value='Restart'></div></div>`
        }


    }else{
        rondaAct++;
        numRondas.innerHTML = rondaAct;
        reiniciarJuego();
        reiniciarMatriz();
        //matriz.fill(0);
    }

}

const revisar = () =>{

    //se pueder mejorar con un for

    if(revisarX()){

        numPartidas--;
        
        gana_x++;
        equis.innerHTML = gana_x;
        nuevaRonda();

    }else if(revisarO()){

        numPartidas--;

        gana_o++;
        circuilo.innerHTML = gana_o;
        nuevaRonda();

    }else if(count == 9 && !revisarO() && !revisarX()){

        numPartidas--;

        alert(numPartidas)

        if(numPartidas == 0){
            nuevaRonda();
        }else{
            empate.classList.remove("modal_ganador_desaparecer");

            empate.style.animation = "aparecer_desaparecer_empate 5s ease";
    
            empate.innerHTML = '<div class="empate_container"><h2>Empate</h2><div><img src="./IMG/cat.webp"></div></div>'
    
            setTimeout(()=>{
                empate.classList.add("modal_ganador_desaparecer");
                nuevaRonda();
            },4000);
        }
        
    }
}



function revisarX(){
    if((matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X') || (matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X') || (matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X') || (matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X') || (matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X') || (matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X') || (matriz[2][0] == 'X' && matriz[1][1] == 'X' && matriz[0][2] == 'X') || (matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X')){
        return true;
    }

    return false;
}

function revisarO(){
    if((matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O') || (matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O') || (matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O') || (matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O') || (matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O') || (matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O') || (matriz[2][0] == 'O' && matriz[1][1] == 'O' && matriz[0][2] == 'O') || (matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O')){
        return true;
    }

    return false;
}

item[0].addEventListener("click",  () => rellenar(0, 0, occupated_item_1, 0));
item[1].addEventListener("click",  () => rellenar(0, 1, occupated_item_2, 1));
item[2].addEventListener("click",  () => rellenar(0, 2, occupated_item_3, 2));
item[3].addEventListener("click",  () => rellenar(1, 0, occupated_item_4, 3));
item[4].addEventListener("click",  () => rellenar(1, 1, occupated_item_5, 4));
item[5].addEventListener("click",  () => rellenar(1, 2, occupated_item_6, 5));
item[6].addEventListener("click",  () => rellenar(2, 0, occupated_item_7, 6));
item[7].addEventListener("click",  () => rellenar(2, 1, occupated_item_8, 7));
item[8].addEventListener("click",  () => rellenar(2, 2, occupated_item_9, 8));

function cambiarEstado(i, j){
    if(i == 0 && j == 0){
        occupated_item_1 = true;
        count++;
    }else if(i == 0 && j == 1){
        occupated_item_2 = true;
        count++;
    }else if(i == 0 && j == 2){
        occupated_item_3 = true;
        count++;
    }else if(i == 1 && j == 0){
        occupated_item_4 = true;
        count++;
    }else if(i == 1 && j == 1){
        occupated_item_5 = true;
        count++;
    }else if(i == 1 && j == 2){
        occupated_item_6 = true;
        count++;
    }else if(i == 2 && j == 0){
        occupated_item_7 = true;
        count++;
    }else if(i == 2 && j == 1){
        occupated_item_8 = true;
        count++;
    }else if(i == 2 && j == 2){
        occupated_item_9 = true;
        count++;
    }
}

function rellenar(i, j, occupated_item_i, numItem){
    if(count%2 == 0 && occupated_item_i == false){
        item[numItem].innerHTML = "<h1>X</h1>";
        matriz[i][j] = 'X';
        cambiarEstado(i, j);
        setTimeout(()=>{
            revisar();
        },250);

    }else if(count%2 != 0 && occupated_item_i == false){
        item[numItem].innerHTML = "<h1>O</h1>";
        matriz[i][j] = 'O';
        cambiarEstado(i, j);
        setTimeout(()=>{
            revisar();
        },250);
    }
}
