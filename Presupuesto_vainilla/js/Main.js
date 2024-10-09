'use strict'

//Instancias
let balance = 0;
let ingresos = [];
let egresos = [];

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

function clearInput()
{
    txtDescripcion.value = null;
    txtMonto.value = null;
}

function countBalance()
{
    let sum = 0.0;
    let res = 0.0;
    let result = 0.0;

    for(let incomes of ingresos)
    {
        sum += parseFloat(incomes.getMonto);
    }

    console.log("Suma :"+sum);
    
    for(let expenses of egresos)
    {
        res += parseFloat(expenses.getMonto);
    }
    
    console.log("Resta: "+res);

    result = parseFloat(sum) - parseFloat(res);

    console.log(`Balance: ${result}`);
    txtBalance.innerHTML = result;
    lblExpenses.innerHTML = res;
    lblIncomes.innerHTML = sum;
}

function drawTable()
{
    let entradas ="";
    let salidas = "";

    for(let incomes of ingresos)
    {
        entradas += `<tr>
                        <td>${incomes.getDescripcion}</td>
                        <td>$${incomes.getMonto}</td>
                        <td><button id="delete-income" class="delete-button"></button></td>
                        <td><button id="" class="edit-button"></button></td>
                    </tr>`;
    }

        
    for(let expenses of egresos)
    {
        salidas += `<tr>
                        <td>${expenses.getDescripcion}</td>
                        <td>$${expenses.getMonto}</td>
                        <td>$${expenses.getCantReal}</td>
                        <td><button id="delete-expense" class="delete-button"></button></td>
                        <td><button id="" class="edit-button"></button></td>
                    </tr>`;
    }

    tbodyIncomes.innerHTML = entradas;
    tbodyExpenses.innerHTML = salidas;
}

//Tags

let txtBalance = document.getElementById('quantity');
let lblIncomes = document.getElementById('incomes');
let lblExpenses = document.getElementById('expenses');
let txtDescripcion = document.getElementById('txtDescripcion');
let txtMonto = document.getElementById('txtMonto');
let sltTipoBalance = document.getElementById('sltTipoBalance');
let tbodyIncomes = document.getElementById('tbodyIncomes');
let tbodyExpenses = document.getElementById('tbodyExpenses');

//Events
document.getElementById('save').addEventListener('click', ()=>{
    let desc = txtDescripcion.value;
    let cash = txtMonto.value;

    desc = verifySentence(desc);
    cash = verifyNumber(cash);

    //console.log(desc+' '+cash);
    if(sltTipoBalance.value == "Ingreso"){
        const value = new Cuenta(desc, cash);
        ingresos.push(value);
    }
    else{
        const value = new Presupuesto(desc, cash, 0);
        egresos.push(value);
    }

    countBalance();
    drawTable();
    clearInput();
});

document.getElementById('delete-income').addEventListener('click', ()=>{
    
})