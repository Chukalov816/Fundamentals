function solve(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {

        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2.join(' '));
}



solve([1, 4, 3, 2])