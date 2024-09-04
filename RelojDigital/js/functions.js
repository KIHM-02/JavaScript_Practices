'use strict'
// Tags
let txtHour = document.getElementById('hora');
let txtDate = document.getElementById('date_time');
let bodyTag = document.getElementById('body-tag');

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


let time = () =>{
    let date = new Date();
    
    let hour    = (date.getHours()  == 0 || date.getHours() < 10   )? `0${date.getHours()}`  : `${date.getHours()}`  ;
    let minutes = (date.getMinutes()== 0 || date.getMinutes() < 10 )? `0${date.getMinutes()}`: `${date.getMinutes()}`;
    let seconds = (date.getSeconds()== 0 || date.getSeconds() < 10 )? `0${date.getSeconds()}`: `${date.getSeconds()}`;


    txtHour.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    txtDate.innerHTML = `Dia ${date.getUTCDay()}  de  ${months[date.getUTCMonth()-1]}  del  Año: ${date.getUTCFullYear()}`;

    setBackgroundColor(date.getSeconds());
}

function setBackgroundColor(seconds)
{
    if(seconds >= 1 && seconds <= 20)
    {
        bodyTag.className = '';
        bodyTag.classList.add('day-time');
    }
    else if(seconds >= 21 && seconds <= 40)
    {
        bodyTag.className = '';
        bodyTag.classList.add('mid-time');
    }
    else
    {
        bodyTag.className = '';
        bodyTag.classList.add('night-time');
    }
}

setInterval(time, 1000);

// Functions
document.addEventListener('load', time());