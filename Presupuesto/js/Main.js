'use strict'

//Instancias
const btnCreateAccount = document.getElementById('btn-create-account');

btnCreateAccount.addEventListener('click', ()=>{
    try{
        let descripçion = prompt('Ingresa la descripcion de la cantidad');
        descripçion = verifySentence(descripçion);

        let monto = prompt('Ingresa el monto');
        monto = verifyNumber(monto);

        let stmt = {
            'id': 0,
            'nombre': descripçion,
            'monto': monto
        };

        let crud = new CRUD()
        crud.insert('cuenta', stmt);

    }catch(err){
        console.log('Hubo un error', err);
    }

    //console.log(descripçion);
    //console.log(monto);
    
});



function verifyNumber(monto)
{
    while(isNaN(monto) || monto.length == 0)
    {
        monto = prompt('Ingresa otra vez el monto, deben ser numeros');
    }

    return monto;
}

function verifySentence(sentence)
{
    while(sentence.length == 0)
    {
        sentence = prompt('Ingresa la descripcion nuevamente');
    }

    return sentence;
}

function test()
{
    try{
        const descripçion = "test";
        const monto = "3400";
        

        let stmt = {
            'id': 0,
            'nombre': descripçion,
            'monto': monto
        };

        let crud = new CRUD()
        crud.insert('cuenta', stmt);

    }catch(err){
        console.log('Hubo un error', err);
    }
}

//test();