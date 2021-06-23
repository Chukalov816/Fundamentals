numbers=[1,3,5,9,8]
 for (let i = 0; i < numbers.length; i++) {
  let second=numbers[i+1] ?numbers[i+1]:0;
  let sum = numbers[i] + second;
  numbers.splice(i, 2, sum)
  console.log(sum);
}
