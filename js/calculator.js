const clearAll = document.querySelector('.clear-all');
const numberBtn = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const displayUpper = document.querySelector('.display-upper');
const displayLower = document.querySelector('.display-lower');
const equals = document.querySelector('.equals');


numberBtn.forEach(number =>{
    number.addEventListener('click',(e) =>{
        let number = e.target.innerText;
        if(number === '.' && displayLower.innerText.includes('.')){
            return;
        }
        displayLower.innerText += number;
    })
})

operator.forEach(operator =>{
    operator.addEventListener('click', (e) =>{
        let operatorText = operator.innerText;

        if(operatorText === 'C'){
            clearDisplay();
        }
        else if(operatorText == 'DEL'){
          clearLastEntity();
        }
        else{
            if(displayUpper.innerText == '' && displayLower.innerText != ''){
                printDisplayUpper(`${getDisplayLower(getDisplayLower.innerText)}  ${operatorText}`);
                displayLower.innerText = ''; 
            }
            else if(displayUpper.innerText != '' && displayLower.innerText != ''){
                let evaluate = displayUpper.innerText + displayLower.innerText;
                if(operatorText){
                    let result = eval(evaluate);
                    printDisplayLower(result);
                    printDisplayUpper(''); 
                }
            }
        }
    })
})
equals.addEventListener('click', (e) =>{
    let evaluate = displayUpper.innerText + displayLower.innerText;
    let result = eval(evaluate);
    printDisplayLower(result);
    printDisplayUpper('');
})


function clearDisplay(){
    displayUpper.innerText = '';
    displayLower.innerText = '';
}

function clearLastEntity(){
    let currentOperand = getDisplayLower(displayLower.innerText)
    if(currentOperand){
        currentOperand = currentOperand.slice(0,-1);
        printDisplayLower(currentOperand);
    }
}

function getDisplayUpper(){
    return displayUpper.innerText;
}

function getDisplayLower(){
    return displayLower.innerText;
}

function printDisplayUpper(txt){
    return displayUpper.innerText = txt;
}

function printDisplayLower(txt){
    return displayLower.innerText = txt;
}