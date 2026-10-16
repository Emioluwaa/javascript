const prompt = require("prompt-sync")();
while(true){
number = Number(prompt("Enter a number: "));

if (Number .isNaN(number)){
    console.log("Not a valid!, enter a valid number!");
}
else{
    for(let index = 1; index <= 12; index++){        
         let multiplication = number * index;
         console.log(number +  "X"  + index +  "="  + multiplication);  
        
    }
    break;
}
}

