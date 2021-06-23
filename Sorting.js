function sort(arr) {
    let result = [];
    let newArr=arr.slice();
    for (let i = 0; i < arr.length; i+=2) {
       
        newArr = newArr.sort((a, b) => b - a);
        let high = newArr.shift();
        result.push(high);
        newArr = newArr.sort((a, b) => a - b);
        let low = newArr.shift();
        result.push(low);
    }
    console.log(result.join(' '));
}





sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])