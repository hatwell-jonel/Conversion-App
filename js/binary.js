const binaryInp = document.querySelector('#bin');
const decimalInp = document.querySelector('#dec');
const  octalInp = document.querySelector('#oct');
const hexadecimalInp = document.querySelector('#hex')
const clearElNumeric = document.querySelector('#clear-numeric');

function binaryConvert(){
    const binary = parseInt(binaryInp.value);

    const decimal = parseInt(binary,2).toString(10);
    const octal = parseInt(binary,2).toString(8);
    const hexadecimal = parseInt(binary,2).toString(16);

    decimalInp.value = binary;
    octalInp.value = octal;
    hexadecimalInp.value =hexadecimal;  

}

function decimalConvert(){
    const decimal = decimalInp.value;

    const binary = parseInt(decimal, 10).toString(2);
    const octal = parseInt(decimal, 10).toString(8);
    const hexadecimal = parseInt(decimal, 10).toString(16);

    binaryInp.value = binary;
    octalInp.value = octal;
    hexadecimalInp.value =hexadecimal;  
}

function octalConvert(){
    const octal = octalInp.value;

    const binary = parseInt(octal, 8).toString(2);
    const decimal = parseInt(octal, 8).toString(10);
    const hexadecimal = parseInt(octal, 8).toString(16);

    binaryInp.value = binary;
    decimalInp.value = decimal;
    hexadecimalInp.value =hexadecimal;
}

function hexadecimalConvert(){
    const hexadecimal = hexadecimalInp.value;

    const binary = parseInt(hexadecimal,16).toString(2);
    const decimal = parseInt(hexadecimal,16).toString(10);
    const octal = parseInt(hexadecimal,16).toString(8);

    binaryInp.value = binary;
    decimalInp.value = decimal;
    octalInp.value = octal;
}



function clearNumeric(){
    binaryInp.value ='';
    decimalInp.value = '';
    octalInp.value = '';
    hexadecimalInp.value = '';
}

binaryInp.addEventListener('input', binaryConvert);
decimalInp.addEventListener('input', decimalConvert);
octalInp.addEventListener('input', octalConvert);
hexadecimalInp.addEventListener('input', hexadecimalConvert);
clearElNumeric.addEventListener('click', clearNumeric);