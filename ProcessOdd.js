function processOdd(arr){
let result=arr.filter(isOdd).map(x=>x*2).reverse();
function isOdd(value, index){
    return index%2!==0;
}
console.log(result.join(' '));
}



processOdd([10, 15, 20, 25])