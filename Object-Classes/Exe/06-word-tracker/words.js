function printOccurrences(input) {

    let stringList = input.shift().split(' ');

    let occurrences = {};

    stringList.forEach(word => {
        occurrences[word] = 0;

        input.forEach(element => {
            if (element === word) {
                occurrences[word]++;
            }
        })
    });

    let result = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of result) {
        console.log(`${key} - ${value}`);
    }
}

printOccurrences([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

]);