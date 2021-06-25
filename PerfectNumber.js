function solve(number){

if (sum(number)/2==number) {
    console.log('We have a perfect number!');
}else{
    console.log("It's not so perfect.");
}


    function sum(n){
        let result=0;
        for (let i = 1; i <=n; i++) {
           if (n%i==0) {
               result+=i;
           }
            
        }return result;
    }
}

solve(1236498)