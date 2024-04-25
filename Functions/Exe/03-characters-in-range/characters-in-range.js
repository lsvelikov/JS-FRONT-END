function charInRange(charOne, charTwo) {

    let first = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
    let second = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());
    let charArr = [];
    const printAllChars = (charOne, charTwo) => {

        if (first < second) {
            for (let i = first + 1; i < second; i++) {
                let char = String.fromCharCode(i);
                charArr.push(char);
            }
        }

        return charArr.join(" ");
    };

    console.log(printAllChars(charOne, charTwo));
}

charInRange('C', '#');