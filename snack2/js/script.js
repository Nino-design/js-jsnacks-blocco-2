/*jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.*/

const nomi = ['Aldo', 'Gianni', 'Vittorio', 'Giulia', 'Valentina'];
const cognomi = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Viola'];

const listaFalsa = [];

for(let i = 0; i < 3; i++){
    const indiceNomeCasuale = Math.floor(Math.random() * nomi.length);
    let nomeCasuale = nomi[indiceNomeCasuale];
    console.log(nomeCasuale);

    const indiceCognomeCasuale = Math.floor(Math.random() * cognomi.length);
    let cognomeCasuale = cognomi[indiceCognomeCasuale];
    console.log(cognomeCasuale);

    const falsaPersona = `${nomeCasuale} ${cognomeCasuale}`;
    console.log(falsaPersona);

    listaFalsa.push(falsaPersona);
}

console.log(listaFalsa);