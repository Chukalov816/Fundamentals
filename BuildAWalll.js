function wall(arr) {

    let result=[];
    let concrete=0;
    while (arr.length > 0) {
        let check=arr.filter(x=>x==30);
        if (check.length===arr.length) {
            break;
        }
        let concreteDaily = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                concreteDaily+=195;
            }else{
                arr=arr.filter(x=>x!==30);
                i--;
            }
        }
        
       
        concrete+=concreteDaily;
        result.push(concreteDaily);
        arr=arr.map(x=>x+1);
    }
    
    console.log(result.join(', '));
    console.log(`${concrete*1900} pesos`);
}




wall([17,22,17,19,17])