//Raccolgo le informazioni e le salvo in variabili:

    //dichiaro le variabili
    let kmInput;
    let km;
    let age;
    let discount;
    let price;
    let result;
    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const kmeuro  = 0.21; 

    //chiedo all'utente il numero di chilometri che vuole percorrere
    kmInput = prompt("Quanti km devi percorrere?");
    kmInput = kmInput.replace(",", ".");
    km = parseFloat(kmInput);
    
    //controllo che km sia un numero e che non sia minore di 0
    if(isNaN(km) || km<0){
        window.alert("Valore inserito non valido");
        //altra possibilità di inserire valore valido
        kmInput = prompt("Quanti km devi percorrere?");
        kmInput = kmInput.replace(",", ".");
        km = parseFloat(kmInput);
        console.log(`km vale ${km}`)
    }
    else{console.log(`km vale ${km}`)}

    //chiedo all'utente l'età del passeggero
    age = parseInt(prompt("Quanti anni hai?"));
    //controllo che l'età sia un numero e che non sia né minore di 0, né maggiore di 120
    if(isNaN(age) || age<0 || age>120 ){
        window.alert("Valore inserito non valido");
        //altra possibilità di inserire valore valido
        age = parseInt(prompt("Quanti anni hai?"));
    }
    else{console.log(`età vale ${age}`)}



//calcolo gli sconti da applicare

    //not not a number => is a number
    if(!isNaN(age)){
        //va applicato uno sconto del 20% per i minorenni
        if(age<18){
            discount=0.2;
            console.log(discount+" = sconto 20% minorenne")
        }
        //altrimenti va applicato uno sconto del 40% per gli over 65
        else if(age>=65){
            discount=0.4;
            console.log(discount+" = sconto 40% over 65")
            }
            //altrimenti non va applicato sconto (0)
        else{
            discount = 0;
            console.log("Nessuno sconto");
        }
    }
    // se l'età non è un numero anche discount non lo è, così anche price è NaN
    else{
         discount = NaN;
    }


//calcolo il prezzo del biglietto 

    //prezzo intero
    price = km*kmeuro;
    //prezzo con sconto
    price = price*(1 - discount);
    console.log("il calcolo è "+price);
    //arrotondo a 2 decimali
    price = price.toFixed(2);
    console.log("il prezzo in € è "+price);


//Stampo il risultato

    //Se il risultato non è un numero stampo errore
    if(isNaN(price) || age<0 || km<0){
        alert('Errore nel calcolo - Degli input non sono valori validi')
        document.getElementById('result').innerHTML = `<button class="red">Errore: inserisci valori validi</button>`;
    }
    else{
        //sostituisco il punto decimale con la virgola trasformando il num in stringa
        price = price.toString();
        price = price.replace(".",",");
        console.log("con la virgola => "+price);
        //Restituisci Stinga
        result = `Devi percorrere ${km}KM e hai ${age} anni: il prezzo del tuo biglietto è ${price}€`;
        window.alert(result);
        //stampo nel div con id result
        document.getElementById('result').innerHTML = `<button>${result}</button>`;
    }









