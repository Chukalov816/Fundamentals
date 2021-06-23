function smallestTwo(arr){
let soretedAscending=arr.sort((a,b)=>a-b);
let firstTwo=soretedAscending.slice(0,2);

console.log(firstTwo.join(' '));
}



smallestTwo([3, 0, 10, 4, 7, 3])