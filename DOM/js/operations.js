'use strict'

let result;

//Eventos
document.getElementById('btnSumar').addEventListener('click', sumar);
document.getElementById('btnCE').addEventListener('click', clean);

function sumar()
{
    let numberA = Number(form_numbers['txtNumberA'].value);
    let numberB = Number(form_numbers['txtNumberB'].value);

    result = numberA + numberB;
    console.log(result);

    tagResult.innerHTML = `El resultado es ${result}`;
}

function clean()
{
    let numberA = form_numbers['txtNumberA'];
    let numberB = form_numbers['txtNumberB'];
    tagResult.innerHTML = "";

    numberA.value = "";
    numberB.value = "";
}


//ACCESO A ETIQUETAS

let form_numbers = document.forms['form-numbers'];
let tagResult = document.getElementById('txtResult');