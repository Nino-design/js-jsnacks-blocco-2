/*jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

let sum = 0;

for(i = 1; i < 6; i++){
    const number = parseInt(prompt('Dimmi 5 numeri a piacere'));
    sum += number;
}

console.log(sum);

/*Versione con While*/

let x = 1;
let sumTwo = 0;
while(x < 6){
    const numberTwo = parseInt(prompt('Dimmi 5 numeri a piacere'));
    sumTwo += numberTwo;
    x++;
}

console.log(sumTwo);