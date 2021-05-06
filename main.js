var numeriIndovinati = []    // ARRAY DI NUMERI INDOVINATI DALL'UTENTE
var numeriPc = [];          // NUMERI GENERATI DAL PC
var numeriUtente = [];      // NUMERI INSERITI DALL'UTENTE
var game = document.getElementById("game");


game=addEventListener("click",
function(){


/*
-------------------------------------------------------------------------------------------
*/

for(var i = 0; i < 6 ; i++){
var numeriGeneratiPc = Math.floor(Math.random()*(1,100)+1)

numeriPc.push(numeriGeneratiPc)
}
alert(numeriPc);
console.log(numeriPc);


/*
-------------------------------------------------------------------------------------------
FUNZIONE DI TIMEOUT SUI PROMPT
*/
setTimeout(funzione,10000)

/*
-------------------------------------------------------------------------------------------
*/


/*
-------------------------------------------------------------------------------------------
FUNZIONE   CHE GENERA I 5 PROMPT   E COMPARA I NUMERI  INSERITI DALL'UTENTE CON QUELLI GENERATI 
SE HAI AVUTO BUONA MEMORIA QUALCUNO 'HAI AZZECCATO
*/

function funzione(){

for(var i = 0; i< 6 ; i++){
     utente = Number(prompt("inserisci 5 numeri "));
    numeriUtente.push(utente);
    
    
}
console.log(numeriUtente);



for (i = 0; i < numeriUtente.length; i++) {
    if (numeriPc.includes(numeriUtente[i]))
    numeriIndovinati.push(numeriUtente[i]);

    
}
console.log(numeriIndovinati);
document.getElementById("esito").innerHTML="HAI RICORDATO " + numeriIndovinati.length + " NUMERI, E SONO!: " + numeriIndovinati


}






}
);








          



















    




      


     
 

    


    





