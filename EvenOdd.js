function EvenOdd(arr){
let sumEven=0;
let sumOdd=0;
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2==0) {
        sumEven+=arr[index];
    }else{
        sumOdd+=arr[index];
    }

}
console.log(sumEven-sumOdd);
}


EvenOdd([1,2,3,4,5,6])