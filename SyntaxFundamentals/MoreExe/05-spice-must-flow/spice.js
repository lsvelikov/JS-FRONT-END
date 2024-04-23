function solve(startingYield) {

    let totalAmountSpices = 0;
    let dayConsume = 26;
    let dayCounter = 0;
    let dailyYieldDrop = 10;
    let isAbandon = false;

    while(startingYield >= 100) {
        totalAmountSpices += startingYield - dayConsume;
        dayCounter++;
        startingYield -= dailyYieldDrop;
        if(startingYield < 100) {
            isAbandon = true;
        }
    }
    if(isAbandon) {
        totalAmountSpices -= dayConsume;
    }

    console.log(dayCounter);
    console.log(totalAmountSpices);
}

solve(450);