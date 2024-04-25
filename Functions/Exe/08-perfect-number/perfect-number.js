function perfectNumber(number) {

    let result = 0;
    function isPerfect(number) {
        
        for(let i = 1; i < number; i++) {
            if(number % i === 0) {
                result += i;
            }
        }
        return result === number;
    }

    if(isPerfect(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(28);
