function matrix(n) {

    for (let i = 0; i < n; i++) {
        console.log(line(n));

    }


    function line(n) {
        let result = [];
        for (let i = 0; i < n; i++) {
           result.push(n);
        }
        let output=result.join(' ');
        return output;
    }

}
matrix(7)