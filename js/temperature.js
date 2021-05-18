const celsiusInp  = document.getElementById('celsius');
const fahreinheitInp  = document.getElementById('fahrenheit');
const kelvinInp  = document.getElementById('kelvin');
const clear = document.getElementById('clear-temp');


function roundNum(num){
    return Math.round(num*100)/100;
}

function celToFahrAndKel(){
    const cTemp = parseFloat(celsiusInp.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp =  cTemp + 273.15;

    fahreinheitInp.value = roundNum(fTemp);
    kelvinInp.value = roundNum(kTemp);

}

function fahrToCelAndKel(){
    const fTemp = parseFloat(fahreinheitInp.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celsiusInp.value = roundNum(cTemp);
    kelvinInp.value = roundNum(kTemp);
}

function kelToFahrAndCel(){
    const kTemp = parseFloat(kelvinInp.value);
    const cTemp = (kTemp - 273.15);
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celsiusInp.value = roundNum(cTemp);
    fahreinheitInp.value = roundNum(fTemp);
}

function clearText(){
    celsiusInp.value = '';
    fahreinheitInp.value = '';
    kelvinInp.value = '';
}

function alphabet(){
    if(celsiusInp.value === 'a'){
        return;
    }
}

alphabet();
celsiusInp.addEventListener('input',celToFahrAndKel);
fahreinheitInp.addEventListener('input', fahrToCelAndKel);
kelvinInp.addEventListener('input', kelToFahrAndCel);
clear.addEventListener('click', clearText);