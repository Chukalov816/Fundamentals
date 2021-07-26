
function odd(n) {

    let oddNumSum = 0;
    let oddNum = 1;
    for (i = 1; i <=n; i++) {
        


        oddNumSum += oddNum;
        console.log(oddNum);
        oddNum += 2;

    }console.log(`Sum: ${oddNumSum}`);

}

odd(5)