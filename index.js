const prompt = require('prompt-sync')({sigint: true});
const operant = ["/","*","+","-","="]
let previousResult = 0
let exit = false

const operation = (number1,number2,type) => {
    let result = 0
    switch (type) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;
        default:
            result = number1
            break;
    }
    return result
}
while (exit == false){
    console.clear()
    console.log(`Select one of the following options:
    + for sum
    - for substraction
    * for multiplication
    / for division
    = for total`)

    let userInput1 = prompt("Enter an option: ")
    if (!operant.includes(userInput1)){
        console.log("Please, enter a valid option")
        userInput1 = prompt("Enter an option: ")
    }
    let userInput2 = Number(prompt("Enter an number: "))
    if (isNaN(userInput2)){
        console.log("Please, enter a valid number")
        userInput2 = Number(prompt("Enter an number: "))
    }
    previousResult = operation(previousResult,userInput2,userInput1)
    console.log(`The result is ${previousResult}`)
    let userInput3 = prompt("Type yes if you want to quit the app: ").toLowerCase()
    if (userInput3 == "yes" || userInput3 == "y"){
        exit = true
    }
}
console.log("Bye")

