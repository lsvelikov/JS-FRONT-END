function solve(array, text) {

    let newArray = array.split(", ");
    let textArray = text.split(" ");
    for(let i = 0; i < newArray.length; i++) {
        for(let j = 0; j < textArray.length; j++) {

            if(textArray[j].includes('*') && textArray[j].length === newArray[i].length) {
                textArray[j] = newArray[i];
            }
        }
    }

    console.log(textArray.join(" "));


}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');