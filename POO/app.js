import { Usuario } from "./Usuarios.js";

document.getElementById("btnIngresar").addEventListener('click',ingresar)


export function validarInput(input) {
    // Elimina cualquier número del valor del input
    input.value = input.value.replace(/\d/g, '');
}

let lista = document.getElementById('listaUsuarios');
let usuario = [];

function ingresar(){
    
    let nombre = document.getElementById("txtNombre");
    let apelli = document.getElementById("txtApel");
    
    if(validarCampos()=== true){
        console.log("Datos guardados");
        let user = new Usuario(nombre.value,apelli.value);
        usuario.push(user);
        console.log(usuario);
        
        printData()
        nombre.value = "";
        apelli.value = "";


    }
}

function printData(){
    let contenido = '';

    for(let usuarios of usuario){
        contenido += `<tr>
            <td>${usuarios.nombre}</td>
            <td>${usuarios.apel}</td>
        </tr>`;
    }

    lista.innerHTML = contenido;
}

function validarCampos(){
    let ban1 = false;
    let ban2 = false;
    let nombre = document.getElementById("txtNombre").value;
    let apelli = document.getElementById("txtApel").value;

    let lblErrorName = document.getElementById("nombreError");
    let lblErrorApel = document.getElementById("apelError");

    if(nombre === ""){
        lblErrorName.innerHTML = `Rellena este campo`;
        lblErrorName.classList.remove('formulario__input-error')
        lblErrorName.classList.add('formulario__input-error-activo');
        ban1=false;
        
    }else{
        lblErrorName.classList.remove('formulario__input-error-activo');
        lblErrorName.classList.add('formulario__input-error');
        ban1=true;
    }
    
    if(apelli === ""){
        lblErrorApel.innerHTML = `Rellena este campo`;
        lblErrorApel.classList.remove('formulario__input-error')
        lblErrorApel.classList.add('formulario__input-error-activo');
       
        ban2=false;
    }
    else{
        lblErrorApel.classList.remove('formulario__input-error-activo');
        lblErrorApel.classList.add('formulario__input-error');
        ban2=true;
    }

    if(ban1 === true && ban2 === true){

        return true;
    }

}


