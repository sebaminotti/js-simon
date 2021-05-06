
var numeriIndovinati = []
var numeriPc = [];
var numeriUtente = [];
for(var i = 0; i < 5 ; i++){
var numeriGeneratiPc = Math.floor(Math.random()*(1,100)+1)

numeriPc.push(numeriGeneratiPc)
}
alert(numeriPc);
console.log(numeriPc);





for(var i = 0; i<5 ; i++){
    var utente = Number(prompt("inserisci 5 numeri "));
    numeriUtente.push(utente);
}
console.log(numeriUtente);



for (i = 0; i < numeriUtente.length; i++) {
    if (numeriPc.includes(numeriUtente[i]))
    numeriIndovinati.push(numeriUtente[i]);

    
}
console.log(numeriIndovinati);


alert("Hai ricordato " + numeriIndovinati.length + " numeri, che sono: " + numeriIndovinati);






/*

L'HO FATTO SENZA TEMPO DI RITARDO 
HO APERTO UN TICKET MI HAN DETTO ARRIVO E NESSUNO SI è PRESENTATO ALMENO DITEMI NON FACCIAMO INTEMPO 

*/


          





















    




      


     
 

    


    





