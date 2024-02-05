/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array

*/


// Crea un array vuoto.
const numberList = [];



// Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6 ; i++) {

    const number = Number(prompt(`Inserisci il ${i + 1}° numero`));  
    

    // Solo se è dispari inseriscilo nell’array.
    if(number % 2 != 0) {

        numberList.push(number);

    }

}


// prendo la lista dalla pagina
const listElement = document.querySelector("ul");

// scrivo il titolo 
document.querySelector("h2").innerText = "Ecco l'elenco dei numeri dispari che hai inserito";

// Stampa a schermo il contenuto dell'array
for(let i = 0; i < numberList.length; i++) {
    
    // creo un elemento html <li>
    const newElement = document.createElement("li");

    // ne cambio il testo interno
    newElement.innerText = numberList[i];

    // lo inserisco in pagina dentro la lista selezionata precedentemente
    listElement.append(newElement);

}
