function equal(first, second) {
    let areEqual = true;
    let differentIndex = 0;


    for (let index = 0; index < first.length; index++) {

        let firstEl = first[index];
        let secondEl = second[index];

        if (firstEl !== secondEl) {
            areEqual = false;
            differentIndex = index;
            break;
        }
    }
    if (areEqual) {
        let sum = 0;
        for (let index = 0; index < first.length; index++) {
            let current = Number(first[index]);
            sum += current;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }
}


equal(['10', '20', '30'], ['10', '20', '30'])