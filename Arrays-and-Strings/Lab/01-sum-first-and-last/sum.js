function sumFirstAndLast(arr) {

    const firstElement = arr.shift();
    const lastElement = arr.pop();

    console.log(firstElement + lastElement);
}
sumFirstAndLast([20, 30, 40]);