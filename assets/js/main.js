// console.log('ebene1: variablen sollen definiert sein');
let gewicht
let groesse
let alter
let pal
let weiblich
let maennlich


const calc = () => {
    gewicht = Number(document.querySelector("#gewicht").value)
    groesse = Number(document.querySelector("#groesse").value)
    alter = Number(document.querySelector("#alter").value)
    weiblich = document.querySelector("#weiblich").checked
    maennlich = document.querySelector("#maennlich").checked
    pal = document.querySelector("#pal").value

    let output = document.querySelector("#output")
    let output2 = document.querySelector("#output2")

    let bmrResult
    let palResult

    if (weiblich) {
        bmrResult = (655 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter)).toFixed(0)
        palResult = (bmrResult * pal).toFixed(0)
    } else if (maennlich) {
        bmrResult = (66 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter)).toFixed(0)
        palResult = (bmrResult * pal).toFoxed(0)
    }

    output.textContent = `${bmrResult} kcal`
    output2.textContent = `${palResult} kcal`
    // console.log("ebene2: die funktion wird aufgerufen, wenn jemand im html auf berehcnen klickt. dabei wird der eingetragene wert aus dem gewichtsfeld in meiner variable für die berechnung gespeichert");
    // console.log("gewicht aus calc " + gewicht);

}

// const test = () => {
    
//     console.log("ebene2: die funktion wird aufgerufen, wenn jemand im html auf testen klickt. Dabei wird mir gezeigt, dass der wert meiner variablen gewicht = dem zugewiesenen wert ist.");
//     console.log("gewicht aus test " + gewicht);
// }