function houseParty(input){
    let list=[];
for (let i = 0; i < input.length; i++) {
    let current=input[i].split(' ');
    let name=current[0];
    let isNotGoing=current.includes('not');
    let isPresent=list.includes(name);
    
if (!isNotGoing) {
    if(!isPresent){
    list.push(name);
}else{
    console.log(`${name} is already in the list!`);
}
}else{
    if (isPresent) {
        list=list.filter(x=>x!==name);
    }else{
        console.log(`${name} is not in the list!`);
    }
}
}console.log(list.join('\n'));

}



houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
