function palindromeNumber(numbersArr) {

    function isPalindrome(num) {
        let numberAsString = num.toString();
        let reversedNumber = numberAsString.split('').reverse().join('');
        return numberAsString === reversedNumber; 
    }

    for(const currentNumber of numbersArr) {
        console.log(isPalindrome(currentNumber));
    }
}
//     for(let i = 0; i < numbersArr.length; i++) {
//         let isPalindrome = false;
//         let currentNumber = numbersArr[i];
//         const reversedNumber = currentNumber => parseFloat(currentNumber.toString().split('').reverse().join(''))*Math.sign(currentNumber);
//         if(currentNumber === reversedNumber(numbersArr[i])) {
//             isPalindrome = true;
//         }
//         console.log(isPalindrome);
//     }    
// }

palindromeNumber([32,2,232,1010]);