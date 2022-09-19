const buttons = document.querySelectorAll('button');
const inputdisplay = document.querySelector('.input-display');

var firstNumbers;
var secondNumbers;
var operator;


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
       
        if (button.classList.contains("backspace")){
            
            inputdisplay.value = backspace()
             
          }
        else if (button.classList.contains("AC")){
            
            inputdisplay.value = ""

            return
             
          }
        else if (button.classList.contains("equals")){
          if (operate() === "undefined"){
            return
          }else{
            inputdisplay.value = operate()
          }
          
           
        }
      
        else if (button.classList.contains("operator")){
            inputdisplay.value += ` ${button.innerText} `
        }else{
            inputdisplay.value += button.innerText
        }
        InputValueArray = inputdisplay.value.split(" ")

        firstNumbers = InputValueArray[0] 
        operator = InputValueArray[1] 
        secondNumbers = InputValueArray[2] 

    })
})
function backspace(){

}
function operate() {
intFirstNumbers = parseFloat(firstNumbers)
intSecondNumbers = parseFloat(secondNumbers)
try{
    switch (operator){
        case "+": return intFirstNumbers + intSecondNumbers
        case "-": return intFirstNumbers - intSecondNumbers
        case "*": return intFirstNumbers * intSecondNumbers
        case "/": return intFirstNumbers / intSecondNumbers
        default: return "undefined"
    }



}catch(e){

return "Error: " + e.message

}





}
