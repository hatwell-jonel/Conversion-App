const clearEl = document.querySelector('#clear-length');
const meterInp = document.querySelector('#mtr');
const inchInp = document.querySelector('#in');
const kilometerInp = document.querySelector('#km');
const feetInp = document.querySelector('#ft');
const mileInp = document.querySelector('#ml');
const yardInp = document.querySelector('#yr');

function clearValues(){
    meterInp.value = '';
    inchInp.value = '';
    kilometerInp.value = '';
    feetInp.value = '';
    mileInp.value = '';
    yardInp.value = '';
}

function meterConvert(){
    const meterVal = parseFloat(meterInp.value);

    const inch = meterVal * 39.37;
    const kilometer = meterVal / 1000;
    const feet = meterVal * 3.28084;
    const mile = meterVal / 1609;
    const yard = meterVal * 1.094;


    inchInp.value = fixed(inch);
    kilometerInp.value = fixed(kilometer);
    feetInp.value = fixed(feet);
    mileInp.value = fixed(mile);
    yardInp.value = fixed(yard);

}

function inchConvert(){
    const inchVal = parseFloat(inchInp.value);

    const meter = inchVal / 39.37;
    const kilometer = inchVal / 39370;
    const feet = inchVal / 12;
    const mile = inchVal / 63360;
    const yard = inchVal / 36;

    meterInp.value = fixed(meter);
    kilometerInp.value = fixed(kilometer);
    feetInp.value = fixed(feet);
    mileInp.value = fixed(mile);
    yardInp.value = fixed(yard);

}

function kilometerConvert(){
    const kilometerVal = parseFloat(kilometerInp.value);

    const meter = kilometerVal * 1000;
    const inch = kilometerVal * 39370;
    const feet = kilometerVal * 3281;
    const mile = kilometerVal / 1.609;
    const yard = kilometerVal * 1094;

    meterInp.value = fixed(meter);
    inchInp.value = fixed(inch);
    feetInp.value = fixed(feet);
    mileInp.value = fixed(mile);
    yardInp.value = fixed(yard);

}

function feetConvert(){
    const feetVal = parseFloat(feetInp.value);

    const meter = feetVal / 3.281;
    const inch = feetVal * 12;
    const kilometer = feetVal / 3281;
    const mile = feetVal / 5280;
    const yard = feetVal / 3;

    
    meterInp.value = fixed(meter);
    inchInp.value = fixed(inch);
    kilometerInp.value = fixed(kilometer);
    mileInp.value = fixed(mile);
    yardInp.value = fixed(yard);

}

function mileConvert(){
    const mileVal = parseFloat(mileInp.value);

    const meter = mileVal * 1609;
    const inch = mileVal * 63360;
    const kilometer = mileVal * 1.609;
    const feet = mileVal * 5280;
    const yard = mileVal * 1760;

    meterInp.value = fixed(meter);
    inchInp.value = fixed(inch);
    kilometerInp.value = fixed(kilometer);
    feetInp.value = fixed(feet);
    yardInp.value =fixed(yard);

}

function yardConvert(){
    const yardVal = parseFloat(yardInp.value);

    const meter = yardVal / 1.094;
    const inch = yardVal * 36;
    const kilometer = yardVal / 1094;
    const feet = yardVal * 3;
    const mile = yardVal / 1760;
    
    meter.toFixed(6);

    meterInp.value = fixed(meter);
    inchInp.value = fixed(inch);
    kilometerInp.value = fixed(kilometer);
    feetInp.value = fixed(feet);
    mileInp.value = fixed(mile);
    
}

function fixed(num){
 return num.toFixed(6);
}

meterInp.addEventListener('input', meterConvert);
inchInp.addEventListener('input', inchConvert);
kilometerInp.addEventListener('input', kilometerConvert);
feetInp.addEventListener('input', feetConvert);
mileInp.addEventListener('input', mileConvert);
yardInp.addEventListener('input', yardConvert);
clearEl.addEventListener('click', clearValues);