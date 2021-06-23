function manipulate(inputArr) {
    let manipulate = inputArr.shift().split(' ');

    for (let i = 0; i < inputArr.length; i++) {
        let current = inputArr[i].split(' ');
        if (current[0] === 'Add') {
            manipulate.push(current[1])
        } if (current[0] === 'Remove') {
            manipulate=manipulate.filter(x=>x!==current[1])
        } if (current[0] === 'RemoveAt') {
            manipulate.splice(current[1], 1);
        } if(current[0]==='Insert') {
            manipulate.splice(current[2], 0, current[1])
        }


    }
    console.log(manipulate.join(' '));


}





manipulate(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
