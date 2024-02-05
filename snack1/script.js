/*

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/


// chiedi all'utente le due parole
// se la lunghezza della prima parola è < della seconda
    // - stampa la prima
// altrimenti
    // stampa la seconda


// chiedi all'utente le due parole
const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");

const resultElement = document.querySelector("#result");

if(word1.length < word2.length) {
    // la prima parola è più corta

    // - stampa la prima
    resultElement.innerText = word1;


} else {
    // stampa la seconda
    resultElement.innerText = word2;
}