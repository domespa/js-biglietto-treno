/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


// 1 - Chiedo all'utente il numero di chilometri che vuole percorrere
const kiloms = Number(prompt("Quanti chilometri devi percorrere?"));
console.log(kiloms);   
// 2 - Chiedo all'utente la sua età
const userAge = Number(prompt("Quanti anni hai?"));
console.log(userAge);   
// 3 - Prezzo base per km 0.21 €
let basePrice = 0.21 * kiloms;
console.log(basePrice);   
// 4 - SE l'utente ha < 18 anni avrà uno sconto del 20%
let discountPrice
if (userAge < 18) {
    discountPrice = basePrice * 0.2;
    alert("Il prezzo del tuo biglietto è " + (basePrice - discountPrice).toFixed(2) + "€")
//     - ALTRIMENTI SE l'utente ha > 65 anni avrà uno sconto del 40%
} else if (userAge > 65) {
    discountPrice = basePrice * 0.4;
    alert("Il prezzo del tuo biglietto è " + (basePrice - discountPrice).toFixed(2) + "€")
//     ALTRIMENTI l'utente che ha >= 18 anni e <= 65 anni pagherà il prezzo per intero
} else if (userAge >= 18 && userAge <= 65) {
    discountPrice = basePrice;
    alert("Il prezzo del tuo biglietto è " + basePrice.toFixed(2) + "€")
}
console.log(discountPrice)


    