function detonate(sequence, bombArr){

  let [bomb, power]=bombArr;
  let index= sequence.indexOf(bomb);

  while(index!=-1){
    let start=index-power <0? 0 : index-power;
    sequence.splice(start,power*2+1);
    index=sequence.indexOf(bomb);
  }
let sum=0;
for (const n of sequence) {
  sum+=n;
}
console.log(sum);
}
detonate([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [2, 1])
  
    
