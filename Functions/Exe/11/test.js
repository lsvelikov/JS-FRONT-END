function solve(number) {
    console.log(calculateFactoriel(number));
}

function calculateFactoriel(number) {
    if(number === 1) {
        return 1;
    }

    return number * calculateFactoriel(number - 1);
}

solve(5);