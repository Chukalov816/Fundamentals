function evenOdd(number) {

console.log(`Odd sum = ${oddSum(number)}, Even sum = ${evenSum(number)}`);

    function evenSum(numbers) {
        let arr = [numbers];
        let arr2=arr.toString();
        let arr1=arr2.split('');
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] % 2 == 0) {
                sum += Number(arr1[i]);
            }

        }return sum;
    }
    function oddSum(numbers) {
        let arr = [numbers];
        let arr2=arr.toString();
        let arr1=arr2.split('');
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] % 2 !== 0) {
                sum +=Number(arr1[i]);
            }
        }return sum;
    }


}


evenOdd(3495892137259234)