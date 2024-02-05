/*

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

*/


const number = prompt("Inserisci un numero");


if(number.length != 4 || isNaN(number)) {
    // è avvenuto un errore
    alert("Non hai inserito un numero di 4 cifre");
} else {

    // inizializzo la somma
    let sum = 0;

    for(let i = 0; i < number.length; i++) {

        sum += Number(number[i]);

    }

    console.log("La somma delle cifre che compongono il numero che hai inserito è " + sum);


}

