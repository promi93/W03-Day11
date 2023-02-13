/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("Esercizio 1:")

function area(l1, l2) {
    return l1 * l2
}
console.log(area(2, 3))

console.log("----------------------------------------")

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("Esercizio 2:")

function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
console.log(crazySum(1, 1))

console.log("----------------------------------------")


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("Esercizio 3:")


function crazyDiff(n3) {
    if (n3 === Number) {
        return Math.abs(n3 - 19);
    } else if (n3 > 19) {
        return Math.abs((n3 - 19) * 3)
    } else {
        console.log('niente')
    }
}
console.log(crazyDiff(190));


console.log("----------------------------------------")


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("Esercizio 4:")

function boundary(n4) {
    if (20 <= n4 && n4 <= 100 || n4 === 400) {
        return true;
    } else {
        return 'inserire numero intero'
    }
}

console.log(boundary(2))

console.log("----------------------------------------")


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("Esercizio 6:")

function check3and7(n5) {
    if (n5 % 3 === 0 || n5 % 7 === 0) {
        return true 
    } else {
        return false
    }
}
console.log(check3and7(7))

console.log("----------------------------------------")


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    var myArray = []
    for (let i = 0; i < n; i++) {
       myArray.push(Math.floor(Math.random()*11 )) 
    }
    return myArray
}

console.log(giveMeRandom(2))

//2, 4, 6, 10 EXTRA : 2, 3, 4, 5