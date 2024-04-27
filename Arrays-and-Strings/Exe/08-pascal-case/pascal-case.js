function solve(text) {

    let regex = /[A-Z][a-z]*/gm;
    let splitText = text.match(regex);

    console.log(splitText.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');