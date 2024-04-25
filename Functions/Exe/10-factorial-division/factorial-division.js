function factorialDivision(numOne, numTwo) {

    function factorialResult(number) {
        let result = 1;
        for (let i = number; i > 1; i--) {
            result *= i;
        }
        return result;
    }

    console.log((factorialResult(numOne) / factorialResult(numTwo)).toFixed(2));
}

factorialDivision(5, 2);