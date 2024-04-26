function solve(str, search) {
    let count = 0;
    let sentence = str.split(" ");

    for(let word of sentence) {
        if(word === search) {
            count++;
        }
    }
    console.log(count);
}

solve('softuni is great place for learning new programming languages',

'softuni');