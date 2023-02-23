

window.addEventListener("load", init)
function init() {
    //console.log("AsdASDASDASD")



    /* document.querySelector("button").addEventListener("click", udv)
    valtozok();
    elagazasok();
    ciklusok(); */
    varHoisiting();
    //letHoisiting();
}

function valtozok() {
    let valtozo1 = 1;
    var valtozo2;
    const VALTOZO3 = 4;
    valtozo2 = 3.45;
    console.log("valtozo1", valtozo1, typeof valtozo1);
    console.log("valtozo2", valtozo2, typeof valtozo2);
    console.log("valtozo3", VALTOZO3, typeof VALTOZO3);
    
}

function elagazasok() {
    /*Döntsük el, hogy 3-vel 3-mal vagy mindkettővel osztható*/
    let szam1 = 4;

    if ((szam1 % 2 === 0) && (szam1 % 3 === 0)) {
        console.log("Osztható 2-vel és 3-mal.")
    } else if (szam1 % 2 === 0) {
        console.log("Osztható 2-vel.")
    } else if (szam1 % 3 === 0) {
        console.log("Osztható 3-al.")
    } else {
        console.log("3-mal és 2-vel sem osztható!")
    }

    let nap = Math.round(Math.random()*7)+1;

    switch(nap) {
        case 1:
            console.log("Hétfő.");
            break;
        case 2:
            console.log("Kedd.");
            break;
        case 3:
            console.log("Szerda.");
            break;
        case 4:
            console.log("Csütörtök.");
            break;
        case 5:
            console.log("Péntek.");
            break;
        case 6:
            console.log("Szombat.");
            break;
        case 7:
            console.log("Vasárnap.");
            break;
        default:
            console.log("Nincs ilyen nap!");
            break;
    }

}

function ciklusok() {
    /*generáljunk 10 véletlen számot 60 és 100 között*/

    for (let i = 0; i < 10; i++) {
        console.log(Math.round(Math.random()*(100 - 60 + 1)) + 60);
    }

    /*Generáljunk számokat [-20, 10] amíg pozitívat nem kapunk*/
    let max = 10;
    let min = -20;
    let num = Math.round(Math.random()*(max - min + 1)) + min;
    while (num <= 0) {
        console.log(num);
        num = Math.round(Math.random()*(max - min + 1)) + min;
    }

    do{
        num = Math.round(Math.random()*(max - min + 1)) + min;
        console.log(num);
    }while (num <= 0);

}
//----------------------------------
/*
    var | funkción belül bárhol lehet használni.
    let | csak az adaott blokkban
*/

function varHoisiting() {
    /*
    A változó deklarálása úgy viselkedik, mintha a hatókörének a tetején deklaráltam volna. 
    indefined lesz az értéke
    */
    console.log(valt);
    var valt = 2;
}

function letHoisiting() {
    /*
    errort dob
    */
    console.log(valt);
    let valt = 1;
}

function udv() {
    alert("szeva");
}