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
    var result = eval(calc); //converts string into code
    document.getElementById('result').innerHTML = result;
    calculation = [];
}

function calculationFormatter(){
    var operation = "";
    for(var i = 0; i<displayArray.length; i++){
        switch(displayArray[i]){
            case "log(":
                operation = "Math.log10(";                                              
                break;                                          
            case "ln(":                                            
                operation = "Math.log(";                                         
                break;                                          
            case "π":                                            
                operation = "Math.PI";                                  
                break;                                          
            case "÷":                                            
                operation = "/";                                         
                break;                                          
            case "×":                                            
                operation = "*";                                         
                break;                                          
            case "−":                                            
                operation = "-";                                         
                break;                                          
            case "sin(":                                            
                operation = "Math.sin(";                                         
                break;                                          
            case "cos(":                                            
                operation = "Math.cos(";                                         
                break;                                          
            case "tan(":                                            
                operation = "Math.tan(";                                         
                break;                                          
            case "sqrt(":                                            
                operation = "Math.sqrt(";                                         
                break;                                          
            case "%":                                            
                operation = "*0.01";                                         
                break;       
            default:
                operation = displayArray[i]; 
        }
        calculation.push(operation);
    }
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=> {
    document.body.classList.toggle('light');
});