function printOddOccurrences(input) {

    input = input.toLowerCase().split(' ');

    let map = new Map();

    input.forEach(element => {

        if (!map.has(element)) {
            map.set(element, 0);
        }

        let oldValue = map.get(element);
        let newValue = oldValue + 1;

        map.set(element, newValue);

    });

    let result = [];

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            result.push(key);
        }
    });

    console.log(result.join(' '));

}

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');