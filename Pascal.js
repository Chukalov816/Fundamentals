function solve(text){
let result=[];
let index=0;
for (let i = 1; i < text.length; i++) {
    if (text[i]===text[i].toUpperCase()) {
        result.push(text.substring(index,i));
        index=i;
    }
}result.push(text.substring(index));
console.log(result.join(', '));

}


solve('SplitMeIfYouCanHaHaYouCantOrYouCan')