function solve(arr1,n){
    for (let i = 0; i < arr1.length; i++) {
        for (let j =i+1; j < arr1.length; j++) {
          let firstEl=arr1[i];
          let secondEl=arr1[j];
          if ((firstEl+secondEl)===n) {
              console.log(firstEl,secondEl);
          }
            
        }
        
    }
}

solve([14, 20, 60, 13, 7, 19, 8],
    27
    )