function signCheck(num1,num2,num3){



function sign(num1,num2,num3){
    let result='';
    let negativeCount=0;
    let arr=[num1,num2,num3];
    let isZero=false;
    for (const element of arr) {
        if (element<0) {
            negativeCount++;
        }else if(element==0){
            isZero=true;
        }
    }
    if ((negativeCount===1||negativeCount===3)&&isZero===false) {
        result='Negative';
    }else{
        result='Positive';
    }
      return result; 
    
}
console.log(sign(num1,num2,num3));

}

signCheck(-1,0,-3)