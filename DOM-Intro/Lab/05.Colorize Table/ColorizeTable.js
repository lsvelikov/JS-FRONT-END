function colorize() {
    // const rows = document.getElementsByTagName("tr");

    // let index = 0;

    // for(let row of rows) {
    //     index++;
    //     if(index % 2 === 0) {
    //         row.style.background = "Teal";
    //     }
    // }

    const rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));

    rows.forEach(row => row.style.background = "teal");
}