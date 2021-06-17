function solve(numbers){
let newNumbers=[];
let sum1=0;
let sum2=0;

for (let index = 0; index < numbers.length; index++) {
let current=numbers[index];
sum1+=current;
if (current%2===0) {
    current+=index;
    sum2+=current;
}else{
    current-=index;
    sum2+=current;
}newNumbers.push(current);
    
}console.log(newNumbers);
console.log(sum1);
console.log(sum2);
}

solve([5, 15, 23, 56, 35])