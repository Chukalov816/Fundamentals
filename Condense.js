function condense(num) {
    let condensed = [];

    while (num.length > 1) {
        for (let index = 0; index < num.length - 1; index++) {
            condensed.push(num[index] + num[index + 1]);
        }
        num = condensed;
        condensed = [];
        
    }
    console.log(num[0]);
}

condense([2, 10, 3])