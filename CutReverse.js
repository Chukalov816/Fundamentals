function solve(text){
let firstHalf=text.substring(0,text.length/2);
let secondHalf=text.substring(firstHalf.length);
console.log(firstHalf.split('').reverse().join(''));
console.log(secondHalf.split('').reverse().join(''));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')