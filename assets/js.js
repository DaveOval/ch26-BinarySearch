console.log("Iniciamos");
let guess = 50;
let max = 100;
let min = 1;

function mostrar(){
    document.getElementById('si').style.display = 'inline-block';
    document.getElementById('no').style.display = 'inline-block';
    document.getElementById('ese').style.display = 'inline-block';
};
function ocultar(){
    document.getElementById('si').style.display = 'none';
    document.getElementById('no').style.display = 'none';
    document.getElementById('ese').style.display = 'none';
};
function deshabilitar(refObj){
    console.log(`"${document.getElementById(refObj.id).id}" button has been disabled`);
    document.getElementById(refObj.id).disabled = true;

};
function preguntar(){
    document.getElementById('pregunta').innerText = `Tu número es el ${guess}?`;
};
function generar(validar){
    if(validar == 'si'){
        console.log('aumentar');
        min = guess;
        guess = (max + guess)/2;
        guess = Math.trunc(guess);
        if (guess == max) encontrado();
    }
    else if(validar == 'no'){
        console.log('disminuir');
        max = guess;
        guess = (min + guess)/2;
        guess = Math.trunc(guess);
        if (guess == min) encontrado();
    }
    guess = Math.trunc(guess)
    preguntar();
};
function encontrado(){
    console.log('fin');
    document.getElementById('pregunta').innerText = `Tu número es el ${guess}, excelente decisión`;
    ocultar();
}