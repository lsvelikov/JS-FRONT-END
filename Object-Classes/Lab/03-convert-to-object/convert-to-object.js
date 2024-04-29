function jsonToString(json) {

    let result = JSON.parse(json);

    for (const iterator in result) {
        console.log(`${iterator}: ${result[iterator]}`);
    }
}

jsonToString('{"name": "George", "age": 40, "town": "Sofia"}');