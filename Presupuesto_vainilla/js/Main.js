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
    
    for(let expenses of egresos)
    {
        res += parseFloat(expenses.getCantReal);
    }

    result = parseFloat(sum) - parseFloat(res);

    txtBalance.innerHTML = result;
    lblExpenses.innerHTML = res;
    lblIncomes.innerHTML = sum;
}

function drawTable()
{
    let entradas ="";
    let salidas = "";
    let iteracion = 0;

    for(let incomes of ingresos)
    {
        entradas += `<tr>
                        <td>${incomes.getDescripcion}</td>
                        <td>$${incomes.getMonto}</td>
                        <td><button class="delete-button btnDeleteIncome" value ="${iteracion}"></button></td>
                        <td><button class="edit-button btnEditIncome" value ="${iteracion}"></button></td>
                    </tr>`;
        iteracion++;
    }

    iteracion = 0;
        
    for(let expenses of egresos)
    {
        salidas += `<tr>
                        <td>${expenses.getDescripcion}</td>
                        <td>$${expenses.getMonto}</td>
                        <td>$${expenses.getCantReal}</td>
                        <td><button class="delete-button btnDeleteExpense" value ="${iteracion}"></button></td>
                        <td><button class="edit-button btnEditExpense" value ="${iteracion}"></button></td>
                    </tr>`;
        iteracion++;
    }

    tbodyIncomes.innerHTML = entradas;
    tbodyExpenses.innerHTML = salidas;
}

function deleteData(index, array)
{
    array.splice(index, 1);
    countBalance();
    drawTable();
    clearInput();
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

tbodyIncomes.addEventListener('click', e => { 
    console.log(e.target);
    if(e.target.classList.contains('btnDeleteIncome'))
    {
        let index = e.target.value;
        deleteData(index, ingresos);
    }
    else if(e.target.classList.contains('btnEditIncome'))
    {
        let index = e.target.value;
        const monto = parseFloat(prompt("Ingresa la nueva cantidad: "));
        ingresos[index].setMonto = monto;
        //console.log(ingresos[index].getMonto);
        countBalance();
        drawTable();
        clearInput();
    }
});

tbodyExpenses.addEventListener('click', e => { 
    console.log(e.target);
    if(e.target.classList.contains('btnDeleteExpense'))
    {
        let index = e.target.value;
        deleteData(index, egresos);
    }
    else if(e.target.classList.contains('btnEditExpense'))
    {
        let index = e.target.value;
        const monto = parseFloat(prompt("Ingresa la nueva cantidad: "));
        egresos[index].setCantReal = monto;
        //console.log(egresos[index].getCantReal);
        countBalance();
        drawTable();
        clearInput();
    }
});