function smallestNumber(a,b,c){


    function findSmallest(a,b,c){
        let result=0;
        if (a<b&&a<c) {
            result=a;
        }else if (b<c&&b<a) {
            result=b;
        }else{
            result=c;
        }return result;
    }

    console.log(findSmallest(a,b,c));
}