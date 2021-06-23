function repeatingNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        arr = arr.filter(x => x !== current);
        arr.splice(i, 0, current);

    }console.log(arr.join(' '));
}




repeatingNumbers([20, 8, 12, 13, 4, 4, 8, 5])