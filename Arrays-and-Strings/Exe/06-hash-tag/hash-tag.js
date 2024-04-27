function solve(text) {


    let regex = /#[A-Za-z]+/gm;
    let matches = text.match(regex);
    for(let word of matches) {
        console.log(word.replace('#', ''));
    }

    // let newText = text.split(" ");

    // for(let i = 0; i < newText.length; i++) {
    //     let word = newText[i];
    //     let lettersCheck = /#[A-Za-z]+/.test(word);
    //     if(word.startsWith('#') && word.length > 1 && lettersCheck === true) {
    //         word = word.substring(1);
    //         console.log(word);
    //     }
    // }

    
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');