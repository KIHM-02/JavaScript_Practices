'use strict'

let personas = [];

function getData()
{
    const name = form['txtName'].value;
    const last = form['txtLast'].value;
    
    const persona = new Persona(name, last);
    personas.push(persona);
    
    console.log(personas);
    printData();
}

function printData()
{
    let content = '';

    for(let persona of personas)
    {
        content += `<tr>
            <td>${persona.getName}</td>
            <td>${persona.getLast}</td>
        </tr>`
    }

    tbody.innerHTML = content;
}


// Tags

let form = document.forms['form-data'];
let tbody = document.getElementById('tbody');

// Events
document.getElementById('btnAdd').addEventListener('click', getData);