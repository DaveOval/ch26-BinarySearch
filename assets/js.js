console.log("Iniciamos");

function mostrar(){
    document.getElementById('si').style.display = 'inline-block';
    document.getElementById('no').style.display = 'inline-block';
};
function ocultar(){
    document.getElementById('si').style.display = 'none';
    document.getElementById('no').style.display = 'none';
};
function deshabilitar(id){
    document.getElementById(id).disabled = true;
};