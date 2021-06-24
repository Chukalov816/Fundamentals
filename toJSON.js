function solve(name,lastName,haircolor){
    let person={
        name:name,
        lastName:lastName,
        haircolor:haircolor
    }

    let jsonStr=JSON.stringify(person);
    console.log(jsonStr);
}


solve('George',
'Jones',
'Brown'
)