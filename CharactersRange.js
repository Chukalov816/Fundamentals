function asciiTable(code1,code2){

function findBetween(a,b){
    
    let first=a.charCodeAt();
    let last=b.charCodeAt();
    let arr=[];
    if (first<last) {
        for (let i =first+1; i <last; i++) {
            let el=String.fromCharCode(i);
         arr.push(el); 
        }
    }else{
        for (let i =last+1; i <first; i++) {
            let el=String.fromCharCode(i);
         arr.push(el);
            
        }
    }
    let result=arr.join(' ');
    return result;
}

console.log(findBetween(code1,code2));

}


asciiTable('a','d')