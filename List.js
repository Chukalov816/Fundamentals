function list(arr){
let sorted=arr.sort();

let listed=sorted.map(myList);
console.log(listed.join('\n'));



function myList(value, index){
    let result= `${index+1}.${value}`;
    return result;
    
    }
}


list(["Potatoes", "Tomatoes", "Onions", "Apples"])