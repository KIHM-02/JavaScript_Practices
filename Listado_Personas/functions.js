"use strict"

let form_data = document.forms['form-data'];
let btnAdd = document.getElementById('btnAdd').addEventListener('click', getName);

function getName()
{
    const name = form_data['txtName'].value;
    const last = form_data['txtLast'].value;

    console.log(name);
    console.log(last);

    appendRowInTable(name, last);
}

function appendRowInTable(names, last)
{
    const row = document.getElementById('tbody');

    row.innerHTML += `
    <tr>
        <td>${names}</td>
        <td>${last}</td>
    </tr>`;
}