function solve(number, op1, op2, op3, op4, op5) {

    let currentNumber = Number(number);
    let opString = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];

    for (let i = 0; i < opString.length; i++) {
        let operation = opString[i];
        switch (operation) {
            case "c":
                currentNumber /= 2;
                break;
            case "d":
                currentNumber = Math.sqrt(currentNumber);
                break;
            case "s":
                currentNumber += 1;
                break;
            case "b":
                currentNumber *= 3;
                break;
            case "f":
                currentNumber *= 0.8;
                break;
        }
        console.log(currentNumber);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');