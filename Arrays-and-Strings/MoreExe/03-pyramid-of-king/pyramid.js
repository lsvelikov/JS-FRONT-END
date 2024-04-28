function calculateMaterial(base, increment) {

    let totalStones = 0;
    let totalMarbel = 0;
    let totalLapis = 0;
    let currentRow = 0;
    let totalGold = 0;

    let calculateStones = (base, increment) => ((base - 2) * (base - 2)) * increment;
    let calculateMarbel = (base, increment) => ((base + base - 2) * 2) * increment;
    while (base > 0) {
        currentRow++;

        if (base < 3) {
            totalGold = base * base * increment;
            currentRow *= increment;
            break;
        }

        totalStones += calculateStones(base, increment);

        if (currentRow % 5 !== 0) {
            totalMarbel += calculateMarbel(base, increment);
        } else {
            totalLapis += calculateMarbel(base, increment);
        }

        base -= 2;

    }

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(currentRow)}`);

}

calculateMaterial(11, 0.75);