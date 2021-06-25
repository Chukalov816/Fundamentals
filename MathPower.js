function math(number,power){

console.log(mathPower(number,power));

    function mathPower(x,y){
        let result=1;
        for (let i = 0; i <y; i++) {
            result*=x;
            }
            return result;
    }
}


math(2,8)