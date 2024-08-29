document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Página cargada y lista.');

});

document.getElementById("btnSumar").addEventListener('click',suma);
document.getElementById("btnClean").addEventListener('click',limpiar)


function suma(){
    let inputNum1 = document.getElementById('txtnum1').value;
    let inputNum2 = document.getElementById('txtnum2').value;
    let etiqueta  = document.getElementById('etiqueta');
    let num1 = Number(inputNum1);
    let num2 = Number(inputNum2);

    if(inputNum1 === "" ||  inputNum2 === ""){
        etiqueta.innerHTML= `Rellena todos los campos`;

    }else{
        

        if(!isNaN(num1) && !isNaN(num2)){
            etiqueta.innerHTML=`El resultado es ${num1+num2}`;
            console.log(inputNum1);
        }else if(isNaN(num1) || isNaN(num2)){
            etiqueta.innerHTML=`Ingresa solo numeros`;
        }
    }
}

function limpiar(){
    let inputNum1 = document.getElementById('txtnum1');
    let inputNum2 = document.getElementById('txtnum2');
    let etiqueta  = document.getElementById('etiqueta');

    inputNum1.value = "";
    inputNum2.value = "";
    etiqueta.innerHTML = "";
}