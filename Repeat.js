function solve(str, n) {

    
    console.log(repeat(str, n));

    function repeat(x, y) {
        let result = '';
        for (let i = 0; i < y; i++) {
            result += x;
        }return result;

    }
     


}


solve('abc', 3)