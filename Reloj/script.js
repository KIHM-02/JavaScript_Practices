let txtHour = document.getElementById('hora');
let txtDate = document.getElementById('date-time');
let bodyTag = document.getElementById('body-tag');

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


function updateTimeAndDate() {
    const now = new Date();
    
    // Obtener hora, minutos y segundos
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Actualizar la hora
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Obtener día, mes y año
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Actualizar la fecha
    document.getElementById('date').textContent = `${dayName} ${day} de ${month} del ${year}`;
}

// Llamar la función inmediatamente y luego cada segundo
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);

