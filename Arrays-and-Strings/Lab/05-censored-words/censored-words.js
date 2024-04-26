function solve(str, word) {

    let result = str.replace(new RegExp(word, "g"), "*".repeat(word.length));

    console.log(result);
}

solve('A small sentence with some words small','small');