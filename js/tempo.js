/*
Copyright 2017 Emilie Rollandin
*/

function trovaLento() {
    var x = document.getElementsByName("truppe");
    var risultato = 0;
    
    var lancieri = 14;
    var spadaccini = 18;
    var arcieri = 14;
    var cavalleriapesante = 9;
    
    var guerrieri= 14;
    var cavallerialeggera = 8;
    var arcierecavallo = 8;
    var ariete = 24;
    var catapulta = 24;
    var nobile = 35;
    var trabucco = 50;

    if (x[0].type == "checkbox") {
        if(x[0].checked) {
            if(lancieri>risultato) {
                risultato = lancieri;
            }
            console.log("Lancieri attivi");            
        }
    }

    if (x[1].type == "checkbox") {
        if(x[1].checked) {
            if(spadaccini>risultato) {
                risultato = spadaccini;
            }
            console.log("Spadaccini attivi"); 
        }
    }

    if (x[2].type == "checkbox") {
        if(x[2].checked) {
            if(arcieri>risultato) {
                risultato = arcieri;
            }
            console.log("Arcieri attivi"); 
        }
    }

    if (x[3].type == "checkbox") {
        if(x[3].checked) {
            if(cavalleriapesante>risultato) {
                risultato = cavalleriapesante;
            }
            console.log("Cav. pesante attivi"); 
        }
    }

    if (x[4].type == "checkbox") {
        if(x[4].checked) {
            if(trabucco>risultato) {
                risultato = trabucco;
            }
            console.log("Trabucchi attivi"); 
        }
    }

    if (x[5].type == "checkbox") {
        if(x[5].checked) {
            if(guerrieri>risultato) {
                risultato = guerrieri;
            }
            console.log("Guerrieri attivi"); 
        }
    }

    if (x[6].type == "checkbox") {
        if(x[6].checked) {
            if(cavallerialeggera>risultato) {
                risultato = cavallerialeggera;
            }
            console.log("Cavalleria leggera attivi"); 
        }
    }

    if (x[7].type == "checkbox") {
        if(x[7].checked) {
            if(arcierecavallo>risultato) {
                risultato = arcierecavallo;
            }
            console.log("Arcieri a cavallo attivi"); 
        }
    }

    if (x[8].type == "checkbox") {
        if(x[8].checked) {
            if(ariete>risultato) {
                risultato = ariete;
            }
            console.log("Arieti attivi"); 
        }
    }

    if (x[9].type == "checkbox") {
        if(x[9].checked) {
            if(catapulta>risultato) {
                risultato = catapulta;
            }
            console.log("Catapulte attivi"); 
        }
    }

    if (x[10].type == "checkbox") {
        if(x[10].checked) {
            if(nobile>risultato) {
                risultato = nobile;
            }
            console.log("Nobili attivi"); 
        }
    }

    return risultato;
}

function calcolaDistanza(x1, y1, x2, y2) {
    if((y1%2==0 && y2%2!=0) || (y1%2!=0 && y2%2==0)) {
        return (Math.sqrt(Math.pow((x1-x2+0.5*Math.sqrt(3)/2),2)+Math.pow((y1-y2)*Math.sqrt(3)/2,2))).toFixed(2);
    } 
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2)*Math.sqrt(3)/2,2)).toFixed(2);
}

document.getElementById("btnCalcola").addEventListener("click", function(){
    //console.clear();

    if(dataArrivo == 0) {
        alert("Selezionare una data!");
        return;
    }

    var xPart = document.getElementsByName("xPart")[0].value;
    var yPart = document.getElementsByName("yPart")[0].value;
    var xArri = document.getElementsByName("xArri")[0].value;
    var yArri = document.getElementsByName("yArri")[0].value;

    // SONO GIUSTI TRA PARI E SBAGLIATI CON I DISPARI

    var distanza = calcolaDistanza(xArri, yArri, xPart, yPart);
    //console.log("Distanza: " +distanza.toFixed(5));

    var Tcasella = trovaLento()*60; // tempo spostamento casella in secondi
    var viaggio = Tcasella*distanza;
    //console.log("Secondi viaggio: " + viaggio);

    var ore = Math.floor(viaggio/3600);
    var minuti = Math.floor((viaggio - ore*60*60)/60);
    var secondi = Math.floor((viaggio - ore*60*60 - minuti*60));
    //console.log("Durata viaggio: " +ore+":"+minuti+":"+secondi);

    document.getElementById("durataViaggio").innerHTML = ore+":"+minuti+":"+secondi;

    var time = moment.duration(ore+":"+minuti+":"+secondi);
    var dataPartenza = moment(dataArrivo);
    dataPartenza.subtract(time);

    document.getElementById("orarioPartenza").innerHTML = moment(dataPartenza).format('DD/MM/YYYY HH:mm:ss');
    //console.log("------------------");
});
