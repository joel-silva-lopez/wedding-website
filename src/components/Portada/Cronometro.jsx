import { useState } from 'react'
import './Cronometro.css'


export function Cronometro() {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setseconds] = useState('00');



    return <> <div id="cronometro">
        <div id="timer">
            <span>{days}</span>
            <span>:</span>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    </div></>
}

/* 




// Define la fecha objetivo (año, mes (0-11), día, horas, minutos, segundos)
const targetDate = new Date('2023-09-23T23:59:59');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        // Si la fecha objetivo ha pasado, muestra "0" en todos los campos
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    } else {
        // Calcula los días, horas, minutos y segundos restantes
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Actualiza los elementos HTML con los valores calculados
        document.getElementById('days').textContent = padZeroes(days);
        document.getElementById('hours').textContent = padZeroes(hours);
        document.getElementById('minutes').textContent = padZeroes(minutes);
        document.getElementById('seconds').textContent = padZeroes(seconds);
    }
}

function padZeroes(value) {
    return value.toString().padStart(2, '0');
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Actualiza el contador de inmediato al cargar la página
updateCountdown();
 */