//Raccolgo le informazioni e le salvo in variabili:

    //chiedere all'utente il numero di chilometri che vuole percorrere
    let km = parseInt(prompt("Quanti km devi percorrere?"));
    //controllo che km sia un numero
    if(isNaN(km)){
        window.alert("Valore inserito non valido");
        km = parseInt(prompt("Quanti km devi percorrere?"));
    }
    else{console.log(`km vale ${km}`)}

    //chiedere all'utente l'età del passeggero
    let age = parseInt(prompt("Quanti anni hai?"));
    if(isNaN(age)){
        window.alert("Valore inserito non valido");
        km = parseInt(prompt("Quanti anni hai?"));
    }
    else{console.log(`età vale ${age}`)}

//prezzi e sconti da applicare
    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const kmeuro  = 0.21; 
    //va applicato uno sconto del 20% per i minorenni
    //va applicato uno sconto del 40% per gli over 65
    let discount;

    if(age<18){
        discount=kmeuro*0.2;
        console.log(discount+" = sconto 20% minorenne")
    }
        else if(age>=65){
            discount=kmeuro*0.4;
            console.log(discount+" = sconto 40% over 65")
        }
        else{
            discount = 0;
            console.log("Nessuno sconto");
    }

//calcolo il prezzo del biglietto 

let price = km*(kmeuro - discount);
console.log(price);
//arrotondo a 2 decimali
price = price.toFixed(2);
console.log(price);


//Se il risultato non è un numero stampo errore

if(isNaN(price)){
    alert('Errore nel calcolo - Degli input non sono valori validi')
}
else{
    //sostituisco il punto decimale con la virgola
    price = String(price);
    price = price.replace(".",",");
    console.log(price);

    let result = `Il prezzo del tuo biglietto è ${price}€`;
    window.alert(result);
    //stampo nel div con id result
    document.getElementById('result').innerHTML = result;
}









