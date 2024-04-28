function calculatingBitcoins(daysArray) {

    let totalMoney = 0;
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let purchaseDay = 0;
    let daysCount = 0;
    let bitcoinsCount = 0;

    function calculateTotalMoney(goldInGr) {
        return goldInGr * goldPrice;
    }

    function buyBitcoin(money) {
        return totalMoney - bitcoinPrice;
    }

    for (let i = 0; i < daysArray.length; i++) {
        daysCount++;
        let goldPerDay = daysArray[i];
        if (daysCount % 3 == 0) {
            goldPerDay *= 0.70;
        }
        totalMoney += calculateTotalMoney(goldPerDay);
        while (totalMoney >= bitcoinPrice) {
            totalMoney = buyBitcoin(totalMoney);
            bitcoinsCount++;
            if (purchaseDay === 0) {
                purchaseDay = daysCount;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if(purchaseDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${purchaseDay}`);
    } 
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}

calculatingBitcoins([50, 100]);