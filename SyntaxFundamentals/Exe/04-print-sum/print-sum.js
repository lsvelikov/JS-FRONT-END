function solve(startNum, endNum) {
    let sum = 0;
    let result = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        result += i + ' ';
    }
    console.log(result.trimEnd());
    console.log(`Sum: ${sum}`);
}
solve(5, 10);