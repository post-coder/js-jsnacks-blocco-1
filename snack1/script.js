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

// controlli
if(word1 == null || word2 == null) {
    alert("Ricarica la pagina e inserisci entrambe le parole");
}


if(word1.length < word2.length) {
    // la prima parola è più corta

    // - stampa la prima
    resultElement.innerText = `La parola "${word1}" è più corta della parola "${word2}" `;

} else if (word1.length > word2.length) {
    // stampa la seconda
    resultElement.innerText = `La parola "${word2}" è più corta della parola "${word1}" `;

} else {
    resultElement.innerText = `La parola "${word1}" ha la stessa lunghezza della parola "${word2}" `;

}