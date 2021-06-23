function search(arr,commands){
let position=commands[0];
let remove=commands[1];
let search=commands[2];
let arr1=arr.slice(0,position)
arr1.splice(0,remove);
let number=arr1.filter(x=>x==search);
let count=number.length;

console.log(`Number ${search} occurs ${count} times.`);
}



search([5, 2, 4, 4, 1, 4, 5, 4, 6],[8, 2, 4])