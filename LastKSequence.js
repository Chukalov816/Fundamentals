function lastK(n,k){
let newArr=[1];
for (let i = 1; i <n; i++) {
   let current=newArr.slice(-k);
let currentSum=0;
for (const element of current) {
    currentSum+=element;
}
    newArr.push(currentSum);
}
console.log(newArr.join(' '));
}

lastK(6,3)