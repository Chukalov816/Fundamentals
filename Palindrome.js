function palindrome(arr){
for (let i = 0; i < arr.length; i++) {
    let eachInteger=(arr[i]).toString().split('').join('');
    let reverse=[...eachInteger];
    let reversedArr=reverse.reverse().join('');

    if (eachInteger==reversedArr){
        console.log('true');
    }else{
        console.log('false');
    }
}

}


palindrome([123,323,421,121])