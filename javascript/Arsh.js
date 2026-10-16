const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));
while(true){

if (!isNaN(number) && number <= 50 && number >= 1){
   for(let index = 1; index <= number; index++){
   
    if(index % 2 == 0){
        console.log("# # # #");
     
    }
    else 
        console.log(" # # # #");
    }
    break;
    }
    number = Number(prompt("Enter a number between 1 to 50: "));
}

