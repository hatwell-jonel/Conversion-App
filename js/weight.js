const gramInp = document.querySelector('#g');
const kilogramInp = document.querySelector('#kg');
const tonInp = document.querySelector('#tn');
const ounceInp = document.querySelector('#onc');
const poundInp = document.querySelector('#pnd');
const clearElw = document.querySelector('#clear-weight');


function gramConvert(){
    const gramVal = parseFloat(gramInp.value);

    const kilogram = gramVal / 1000;
    const ton =  gramVal / 907185;
    const ounce = gramVal / 28.35;
    const pound = gramVal / 454;

    kilogramInp.value = kilogram;
    tonInp.value = fixed(ton);
    ounceInp.value = fixed(ounce);
    poundInp.value = fixed(pound);
}

function kilogramConvert(){
    const kilogramVal = parseFloat(kilogramInp.value);

    const gram = kilogramVal * 1000;
    const ton = kilogramVal / 907;
    const ounce = kilogramVal * 35.274;
    const pound = kilogramVal * 2.205;

    gramInp.value = fixed(gram);
    tonInp.value = fixed(ton);
    ounceInp.value = fixed(ounce);
    poundInp.value = fixed(pound);
}

function tonConvert(){
    const tonVal = parseFloat(tonInp.value);

    const gram = tonVal * 907185;
    const kilogram = tonVal * 907;
    const ounce = tonVal * 32000;
    const pound =  tonVal * 2000;

    gramInp.value = fixed(gram);
    kilogramInp.value = fixed(kilogram);
    ounceInp.value = fixed(ounce);
    poundInp.value = fixed(pound);
}

function ounceConvert(){
    const ounceVal = parseFloat(ounceInp.value);

    const gram = ounceVal * 28.35;
    const kilogram = ounceVal / 35.274;
    const ton = ounceVal / 32000;
    const pound = ounceVal / 16;

    gramInp.value = fixed(gram);
    kilogramInp.value = fixed(kilogram);
    tonInp.value = fixed(ton);
    poundInp.value = fixed(pound);

}

function poundConvert(){
    const poundVal = parseFloat(poundInp.value);

    const gram = poundVal * 454;
    const kilogram = poundVal / 2.205;
    const ton = poundVal / 2000;
    const ounce = poundVal * 16;

    gramInp.value = fixed(gram);
    kilogramInp.value = fixed(kilogram);
    tonInp.value = fixed(ton);
    ounceInp.value = fixed(ounce);
}

function clearw(){
    gramInp.value = '';
    kilogramInp.value = '';
    tonInp.value = '';
    ounceInp.value = '';
    poundInp.value ='';
}

gramInp.addEventListener('input', gramConvert);
kilogramInp.addEventListener('input', kilogramConvert);
ounceInp.addEventListener('input', ounceConvert);
tonInp.addEventListener('input', tonConvert);
poundInp.addEventListener('input', poundConvert);
clearElw.addEventListener('click', clearw);