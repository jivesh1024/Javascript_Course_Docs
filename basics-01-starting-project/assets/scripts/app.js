const defaultResult = 0
let currentData = defaultResult;
currentData = currentData + 10;
let calculationDescription = 'The result is';

function add(num1, num2)
{
    const result = num1 + num2;
    return result;
}

currentData = add(1,3);


outputResult(currentData,calculationDescription);

