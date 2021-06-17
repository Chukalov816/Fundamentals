function equal(arr) {

let isEqual=false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        if (leftSum == rightSum) {
            console.log(i);
            isEqual=true;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
