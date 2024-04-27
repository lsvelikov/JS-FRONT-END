function solve(arr, step) {

    let newArr = arr.length;
    let result = [];
    for(let i = 0; i < newArr; i += step) {
        let element = arr[i];
        result.push(element);
    }
    return result;
}

solve(['dsa', 'asd', 'test', 'tset'], 2);