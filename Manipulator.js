function manipulator(numbers, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentArr = commands[i].split(' ');
        let command = currentArr.shift();
        let current=currentArr.map(Number);
        let isFinished = false;
        switch (command) {
            case 'add':
                let index = current[0];
                let element = current[1];
                numbers.splice(index, 0, element);
                break;
            case 'addMany':
                let index1 = current.shift();
                let reversedCurrent=current.reverse();
                for (const el of reversedCurrent) {
                    numbers.splice(index1, 0,el);
                }
                break;
            case 'contains':
                console.log(numbers.indexOf(current[0]));
                break;
            case 'remove':
                let index2 = current[0];
                numbers.splice(index2, 1);
                break;
            case 'shift':
                let positions = current[0];
                for (let i = 0; i < positions; i++) {
                    let element2 = numbers.shift();
                    numbers.push(element2);
                }
                break;
            case 'sumPairs':
                for (let i = 0; i < numbers.length; i++) {
                    let second=numbers[i+1] ?numbers[i+1]:0;
                    let sum = numbers[i] + second;
                    numbers.splice(i, 2, sum)
                }
                break;
            case 'print':
                isFinished = true;
                break;


        }
        if (isFinished) {
            console.log('[ '+ numbers.join(', ') + " ]");
            break;
        }
        
    }

}

manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )