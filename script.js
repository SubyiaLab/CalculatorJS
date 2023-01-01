
const numberBtn = document.querySelectorAll(".operand");
const operatorBtn = document.querySelectorAll(".operator");
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equals');

/*window.addEventListener('keydown', function(e){
    const key = this.document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
    console.log(key.click());
});*/

let displayValue = '0';
let firstOperand = '';
let secondOperand = '';
let firstOperator = '';
let secondOperator = '';
let result = '';

function updateDisplay(){
    const display = document.querySelector("#display");
    display.innerText = displayValue;
    display.innerText = displayValue.substring(0,9);
}

numberBtn.forEach((number)=> {
    number.addEventListener('click', function () {
        firstOperand +=number.value;
        displayValue = firstOperand;
        updateDisplay();
    })
});

operatorBtn.forEach((operator)=> {
    operator.addEventListener('click', function () {
        firstOperator +=operator.value;
        displayValue = firstOperator;
        updateDisplay();
    })
});

function adding (x,y){
    return x+y;
};

function subtracting (x,y){
    return x-y;
};

function multi(x,y){

    return x*y;
};

function dividing(x,y){
    return x/y;
};

function modul(x,y){
    return x%y;
}

function operate (ops,x,y){

    switch (ops){
        case "+": 
            return adding(x,y);
        case "-": 
            return subtracting(x,y);
        case "*": 
            return multi(x,y);
        case "/": 
            return dividing(x,y);
        case "%":
            return modul(x,y);
    }
    
};

