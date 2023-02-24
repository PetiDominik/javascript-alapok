window.addEventListener("load", main)

function main() {
    /*
    constans elemei módosíthatóaak, hozzáfűzhető és kivehető a listából elem, viszont nem lehet másik listával felülírni
    const LISTA = {1, 2};
    //LISTA = {1, 2};
    */

    let lista = [3, 4, 5, 6];
    //hozzáfűzés
    lista.push(9);
    console.log(lista);
    // utolsó elem kivétele
    lista.pop();
    // elemtől elemig való törlés, ha a két érték után írunk értékeket akkor meg lehet adni, hogy mit szúrjon be.
    lista.splice(2)

}