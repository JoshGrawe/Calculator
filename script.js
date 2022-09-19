const buttons = document.querySelectorAll('button');
const inputdisplay = document.querySelector('.input-display');

var firstNumbers;
var secondNumbers;
var operator;


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {

        
        if (button.classList.contains("AC")){
            console.log("rest")
            inputdisplay.value = ""

            return
             
          }
        else if (button.classList.contains("equals")){
         
          inputdisplay.value = operate()
           
        }

        else if (button.classList.contains("operator")){
            inputdisplay.value += ` ${button.innerText} `
        }else{
            inputdisplay.value += button.innerText
        }

        firstNumbers = inputdisplay.value.split(" ")[0] 
        operator = inputdisplay.value.split(" ")[1] 
        secondNumbers = inputdisplay.value.split(" ")[2] 

        console.log((`${firstNumbers}, ${operator} ${secondNumbers}`))
    })
})

function operate() {
intFirstNumbers = parseFloat(firstNumbers)
intSecondNumbers = parseFloat(secondNumbers)
try{
    switch (operator){
        case "+": return intFirstNumbers + intSecondNumbers
        case "-": return intFirstNumbers - intSecondNumbers
        case "*": return intFirstNumbers * intSecondNumbers
        case "/": return intFirstNumbers / intSecondNumbers
    }



}catch(e){

return "Error: " + e.message

}





}
