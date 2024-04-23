function solve(text) {

    text = text.toUpperCase();

    let regex = /\b\w{1,}\b/gm;
    let textToPrint = text.match(regex, ' ');

    console.log(textToPrint.join(", "));
}

solve('Hi, how are you?');