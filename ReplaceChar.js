function solve(text){
  let result='';
  for (const char of text) {
      if (char!==result[result.length-1]) {
          result+=char;
      }
  }console.log(result);
    

}


solve('aaaaabbbbbcdddeeeedssaa')