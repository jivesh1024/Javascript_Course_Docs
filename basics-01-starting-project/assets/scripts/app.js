const defaultResult = 0
let currentData = defaultResult;
let calculationDescription = 'The result is';

function getEnteredNumber(){
    return parseInt(userInput.value);
}
function add()
{
    let enteredNumber = getEnteredNumber();
    calculationDescription = c
    currentData = currentData + parseInt(userInput.value);
    outputResult(currentData,calculationDescription);
}

addBtn.addEventListener('click', add);




