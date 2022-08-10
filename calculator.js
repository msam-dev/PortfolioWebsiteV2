var displayArray = [];
var calculation = [];

function Display(symbol){
    var displayContent = displayArray.join("");
    
    if(symbol != "p"){
        document.getElementById('value').innerHTML = displayContent + symbol;
        displayArray.push(symbol); 
    }else{
        document.getElementById('value').innerHTML = displayContent;
    }
}

function Clear(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('value').innerHTML = "";
    displayArray = [];
    calculation = [];
}

function Backspace(){
    if(displayArray.length > 0){
        displayArray.pop();
        Display("p");
    }            
}

function calculate(){
    calculationFormatter();
    var calc = calculation.join("");
    console.log(calc);
    var result = eval(calc); //converts string into code
    document.getElementById('result').innerHTML = result;
    calculation = [];
}

function calculationFormatter(){
    for(var i = 0; i<displayArray.length; i++){
        if(displayArray[i] == "log("){
            calculation.push("Math.log10(");
        }else if(displayArray[i] == "ln("){
            calculation.push("Math.log(");
        }else if(displayArray[i] == "π"){
            calculation.push("Math.PI");
        }else if(displayArray[i] == "÷"){
            calculation.push("/");
        }else if(displayArray[i] == "×"){
            calculation.push("*");
        }else if(displayArray[i] == "−"){
            calculation.push("-");
        }else if(displayArray[i] == "sin("){
            calculation.push("Math.sin(");
        } else if(displayArray[i] == "cos("){
            calculation.push("Math.cos(");
        } else if(displayArray[i] == "tan("){
            calculation.push("Math.tan(");
        }else if(displayArray[i] == "sqrt("){
            calculation.push("Math.sqrt(");
        }else if(displayArray[i] == "%"){
            calculation.push("*0.01");
        }else{
            calculation.push(displayArray[i]);
        }
    }
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=> {
    document.body.classList.toggle('light');
});