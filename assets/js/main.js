console.log('ebene1: variablen sollen definiert sein');
let gewicht
let groesse
let alter
let pal
let weiblich
let maennlich
let bmrMann = 66 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter)
let bmrFrau = 655 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter)
let output = document.querySelector("#output")



const calc = () => {
    gewicht = Number(document.querySelector("#gewicht").value)
    groeße = Number(document.querySelector("#groesse").value)
    alter = Number(document.querySelector("#alter").value)
    weiblich = document.querySelector("#weiblich").checked
    maennlich = document.querySelector("#maennlich").checked
    pal = document.querySelector("#pal").value

    if (weiblich) {
        output.innerHTML = bmrFrau
    } 
    console.log("test");
    // console.log("ebene2: die funktion wird aufgerufen, wenn jemand im html auf berehcnen klickt. dabei wird der eingetragene wert aus dem gewichtsfeld in meiner variable für die berechnung gespeichert");
    // console.log("gewicht aus calc " + gewicht);

}

// const test = () => {
    
//     console.log("ebene2: die funktion wird aufgerufen, wenn jemand im html auf testen klickt. Dabei wird mir gezeigt, dass der wert meiner variablen gewicht = dem zugewiesenen wert ist.");
//     console.log("gewicht aus test " + gewicht);
// }