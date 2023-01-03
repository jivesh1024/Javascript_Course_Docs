const defaultResult = 0
let currentData = defaultResult;
let calculationDescription = 'The result is';

function add()
{
    currentData = currentData + userInput.value;
    outputResult(currentData,calculationDescription);
}

addBtn.addEventListener('click', add);




