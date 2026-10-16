const numbers = [2, 7, 8, 5]
let target = 9;
for(let count = 0; count < numbers.length; count++){
    for (let index = 1; index < numbers.length; index++){
        if (numbers[count] + numbers[index] == target){
        console.log(numbers[count], numbers[index]);
        console.log(count, index);
        }
    }
}
