function splitOperation(operation) {
    const parts = operation.split(" ");
    const firstNumber = parseInt(parts[0], 10);
    const operator = parts[1];
    const secondNumber = parseInt(parts[2], 10);
    return [firstNumber, operator, secondNumber];
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        console.log("Can't divide by 0");
        return null;
    }
    return a / b;
}

function doOperation(operation) {

    const [firstNumber, operator, secondNumber] = splitOperation(operation);
   
   switch (operator) {
        case "+":
            return addition(firstNumber, secondNumber);
        case "-":
            return subtraction(firstNumber, secondNumber);
        case "*":
            return multiplication(firstNumber, secondNumber);
        case "/":
            return division(firstNumber, secondNumber);
        default:
            return null; // ducoup retourne null si l'opérateur est egal a zero
    }
}
