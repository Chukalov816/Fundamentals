function negativePositive(arr){
   let newArr=[];

   for (const element of arr) {
       if (element>=0){
           newArr.push(element)
       }else{
           newArr.unshift(element)
       }
      
   }console.log(newArr.join('\n')); 
}

negativePositive([7, -2, 8, 9])