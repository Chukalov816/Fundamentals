function firstLast(arr){
    let numArr=arr.map(Number);
    let sum= numArr[0]+numArr[arr.length-1];

    console.log(sum);
}


firstLast(['20', '30', '40'])