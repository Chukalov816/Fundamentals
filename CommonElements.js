function solve(arr1, arr2) {

    for (let index = 0; index < arr1.length; index++) {
        let firstEl = arr1[index];
        for (let index = 0; index < arr2.length; index++) {
            let secondEl = arr2[index];
            if (firstEl === secondEl) {
                console.log(firstEl);
            }

        }

    }
}

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])