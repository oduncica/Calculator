function addNumber(number1, number2){
    // let number1 = prompt("Enter number1");
    // let number2 = prompt("Enter number2");
        addResult = parseInt(number1) + parseInt(number2);
        const div = document.querySelector(".div");
        div.textContent = addResult;
        return addResult;        
}

function subtractNumber(number1, number2){
    subtractResult = parseInt(number1) - parseInt(number2);
    const div = document.querySelector(".div");
    div.textContent = subtractResult;
    return subtractResult;
}


function multiplyNumber(number1, number2){
    multiplyResult = parseInt(number1) * parseInt(number2);
    const div = document.querySelector(".div");
    div.textContent = multiplyResult;
    return multiplyResult;


}
function divideNumber(number1, number2){
    divideResult = parseInt(number1) / parseInt(number2);
    const div = document.querySelector(".div");
    div.textContent = divideResult;
    return divideResult;
}


function operate (number1, number2, operator) {
    if (operator == "+") {
        addNumber(number1, number2);
    }   

   else if (operator == "-") {
        subtractNumber(number1, number2);
    }   
    else if (operator == "*") {
        multiplyNumber(number1, number2);
    }   
     
    else { 
        divideNumber(number1, number2);

    }
}

operate(8,2,"-")
