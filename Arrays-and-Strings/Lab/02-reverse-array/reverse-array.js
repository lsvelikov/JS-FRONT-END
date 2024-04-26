function reverseArr(n, arr) {

    let reversedArr = arr.slice(0, n).reverse().join(" ");
    console.log(reversedArr);
}

reverseArr(3, [10, 20, 30, 40, 50]);