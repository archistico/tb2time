// TEST DISTANZA

function testa(calcolato, desiderato, nometest) {
    if(calcolato==desiderato) {
        console.log(nometest + ": Passato");
    } else {
        console.log(nometest + ": Non passato! Valore calcolato: " + calcolato + " atteso -> " + desiderato);
    }
}

testa(calcolaDistanza(500,500,501,500), 1, "Dist 01");
testa(calcolaDistanza(500,500,521,500), 21, "Dist 02");
testa(calcolaDistanza(500,500,500,521), 18.19, "Dist 03");
testa(calcolaDistanza(500,500,520,500), 20, "Dist 04");
testa(calcolaDistanza(500,500,520,540), 40, "Dist 05");

testa(calcolaDistanza(500,500,521,540), 40.51, "Dist 06");
testa(calcolaDistanza(500,500,521,541), 41.51, "Dist 07");// non passato Valore calcolato: 41.25 atteso -> 41.51
testa(calcolaDistanza(500,500,500,501), 1, "Dist 08");    // non passato Valore calcolato: 0.87 atteso -> 1
testa(calcolaDistanza(501,501,503,503), 2.65, "Dist 09"); 
testa(calcolaDistanza(501,521,523,475), 45.51, "Dist 10");

testa(calcolaDistanza(501,500,523,575), 68.74, "Dist 11"); // non passato Valore calcolato: 68.58 atteso -> 68.74
testa(calcolaDistanza(500,501,523,575), 68.09, "Dist 12");