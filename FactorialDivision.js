function factorialDivision(a, b) {

console.log((factorial(a)/factorial(b)).toFixed(2));
    function factorial(a) {
        let result = 1;
        for (let i = 1; i <= a; i++) {
            result *= i;
        }return result;
    }
}


factorialDivision(5,2)