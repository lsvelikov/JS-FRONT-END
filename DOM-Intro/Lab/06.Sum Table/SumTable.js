function sumTable() {
    const rows = document.querySelectorAll('table tr');
    const totalSum = document.getElementById('sum');

    let sum = 0;
    for(let row = 1; row < rows.length - 1; row++) {
        const cells = rows[row].children;
        const cellCurrrentPrice = Number(cells[1].textContent);

        sum += cellCurrrentPrice;
    }
    totalSum.textContent = sum;
}