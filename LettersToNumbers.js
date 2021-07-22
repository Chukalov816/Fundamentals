function solve(text){
let alphabet=' abcdefghigklmnopqrstuvwxyz';
let textArr=text.split(' ');
textArr=textArr.filter(x=>x.length>1);
total=0;
for (let task of textArr) {
    let first=task[0];
    let last=task[task.length-1];
    let number=Number(task.substring(1,task.length-1));
    let firstIndex=alphabet.indexOf(first.toLowerCase());
    let lastIndex=alphabet.indexOf(last.toLowerCase());
    let sum=0;
    if (first.toLowerCase()===first) {
       sum=number*firstIndex;
    }else{
        sum=number/firstIndex;
    }
    if (last.toLowerCase()===last) {
        sum+=lastIndex;
    }else{
        sum-=lastIndex;
    }
    total+=sum;
}
console.log(total.toFixed(2));
}


solve('   P0Z   ')