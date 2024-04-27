function solve(arr) {

    let sortedArr = [];
    // let arrayToSort = arr.sort((a, b) => a- b);
    function compareNumbers(a, b) {
        return a - b;
    }

    arr.sort(compareNumbers);
    let arrayToSort = arr.slice();
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            sortedArr.push(arrayToSort.shift());
        } else {
            sortedArr.push(arrayToSort.pop());
        }
    }
    return sortedArr;
}

solve([1, 3, 65]);