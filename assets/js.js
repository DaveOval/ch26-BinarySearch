console.log("Iniciamos");
let guess = 50;
let max = 100;
let min = 1;

function mostrar(ref){
    console.log(ref)
    document.getElementById(ref).style.display = 'inline';

};
function ocultar(ref){
    document.getElementById(ref).style.display = 'none';
};
/* function deshabilitar(refObj){
    console.log(`"${document.getElementById(refObj.id).id}" button has been disabled`);
    document.getElementById(refObj.id).disabled = true;
}; */

function preguntar(){
    document.getElementById('pregunta').innerText = `Tu número es el ${guess}?`;
};

terminator:
function generar(validar){
    if(validar == 'si'){
        console.log('aumentar');
        console.log(max);
        min = guess;
        guess = (max + guess)/2;
        guess = Math.trunc(guess);
        console.log(min);
        console.log(guess);
        if (guess == min){
            guess++;
            encontrado();
            return;
        }
    }
    else if(validar == 'no'){
        console.log('disminuir');
        max = guess;
        guess = (min + guess)/2;
        guess = Math.trunc(guess);
        console.log(max);
        console.log(guess);
        if (guess == 1) {
            encontrado();
            return;
        }
    }
    guess = Math.trunc(guess)
    preguntar();
};
function encontrado(){
    console.log('fin');
    document.getElementById('pregunta').innerText = `Tu número es el ${guess}, excelente decisión`;
    ocultar('botones');
    mostrar('restart');
}
function restart(){
    guess = 50;
    max = 100;
    min = 1;

    mostrar('intro');
    mostrar('submit');
    ocultar('restart');
    
    document.getElementById('pregunta').innerText = " ";
}