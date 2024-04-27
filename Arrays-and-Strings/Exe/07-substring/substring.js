function solve(word, text) {

    let textArr = text.toLowerCase().split(" ");
    let output = `${word} not found!`;
    for(let i = 0; i < textArr.length; i++) {
        if(word === textArr[i]){
            output = textArr[i];
        }
    }
    console.log(output);
    
}
solve('javascript',

'JavaScript is the best programming language');