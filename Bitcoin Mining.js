function purchase(arr) {
    let bitcoin = 11949.16;
    let gram = 67.51;
    let totalSum=0;
    let day=0;
    let firstDay=0;
    let countBitcoin=0;
    let boughtBitcoin=0;
    let sumBitcoin=0;
    

    for (let i = 0; i < arr.length; i++) {
        day++;
        let dailyGold = arr[i];
       
        if (day % 3 === 0) {
           dailyGold*=0.7;

        }
        let dailyMoney=dailyGold*gram;
        totalSum+=dailyMoney;

        if (totalSum >= bitcoin) {
            countBitcoin++
           boughtBitcoin=Math.floor(totalSum/bitcoin);
          totalSum=totalSum-(boughtBitcoin*bitcoin)
          sumBitcoin+=boughtBitcoin;
        }
        if (countBitcoin===1) {
            firstDay=day;
        }

    }
    console.log(`Bought bitcoins: ${sumBitcoin}`);
    if(firstDay>0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}

purchase([3124.15,504.212,2511.124])