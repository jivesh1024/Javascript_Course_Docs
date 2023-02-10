const defaultResult = 0
let currentData = defaultResult;
let calculationDescription = 'The result is';
let resultArray = [];
//when we check typeof of an array we get objet
//because an array is a special type of object and similarly null

function getEnteredNumber(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(initalResult, operator, enteredNumber){
    calculationDescription = `${initalResult} ${operator} ${enteredNumber}`;
    outputResult(currentData,calculationDescription);
}
function calculateResult(calculationType){
    let mathOperator;
    let enteredNumber = getEnteredNumber();
    const initalResult = currentData;
    if(calculationType==='ADD'){
        
        currentData = currentData + enteredNumber;
        mathOperator='+';
    }
    else if(calculationType==='Subtract') {
        currentData = currentData - enteredNumber;
        mathOperator='-';
    }
    else if(calculationType==='Multiply'){
        currentData = currentData * enteredNumber;
        mathOperator='*';
    }
    else if(calculationType==='Divide'){
        currentData = currentData / enteredNumber;
        mathOperator='/';
    }
    createAndWriteOutput(initalResult, mathOperator, enteredNumber);
    writeToLog(calculationType, initalResult, enteredNumber, currentData);
}
function writeToLog(
    operator,
    prevResult,
    number,
    result
){
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        number: number,
        result: result
    };
    resultArray.push(currentData);
    console.log(logEntry);
}

function add(){
    calculateResult('ADD');
}   

function substract(){
    calculateResult('Subtract');
}

function multiply(){
    calculateResult('Multiply');
}

function divide(){
    calculateResult('Divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);



//hehe comment added




