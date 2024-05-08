
function addNumber(number1, number2){
    addResult = parseInt(number1) + parseInt(number2);
    return addResult;
}

function subtractNumber(number1, number2){
    subtractResult = parseInt(number1) - parseInt(number2);
    return subtractResult;
}

function multiplyNumber(number1, number2){
//     let number1 = prompt("Enter number1");
// let number2 = prompt("Enter number2");
    multiplyResult = parseInt(number1) * parseInt(number2);
    const div = document.querySelector(".div");
div.textContent = multiplyResult;

}
function divideNumber(number1, number2){
    divideResult = parseInt(number1) / parseInt(number2);
    return divideResult;
}

multiplyNumber();




