/*

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/


let sum = 0;

for(let i = 0; i < 10; i++) {

    const number = Number(prompt(`Inserisci il ${i + 1}° numero`));

    // controllo che il numero inserito non sia nullo e che sia un numero
    if(number == null || isNaN(number)) {
        alert("Non hai inserito un numero! Questo dato non verrà sommato");
    } else {
        // sum = sum + number;
        sum += number;
    }

}

console.log("Il risultato della somma è: " + sum);