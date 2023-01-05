const defaultResult = 0
let currentData = defaultResult;
let calculationDescription = 'The result is';

function getEnteredNumber(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(initalResult, operator, enteredNumber){
    calculationDescription = `${initalResult} ${operator} ${enteredNumber}`;
    outputResult(currentData,calculationDescription);
}

function add(){
    let enteredNumber = getEnteredNumber();
    const initalResult = currentData;
    currentData = currentData + enteredNumber;
    createAndWriteOutput(initalResult, '+', enteredNumber);
}

function substract(){
    let enteredNumber = getEnteredNumber();
    const initalResult = currentData;
    currentData = currentData - enteredNumber;
    createAndWriteOutput(initalResult, '-', enteredNumber);
}

function multiply(){
    let enteredNumber = getEnteredNumber();
    const initalResult = currentData;
    currentData = currentData * enteredNumber;
    createAndWriteOutput(initalResult, '*', enteredNumber);
}

function divide(){
    let enteredNumber = getEnteredNumber();
    const initalResult = currentData;
    currentData = currentData / enteredNumber;
    createAndWriteOutput(initalResult, '/', enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);




