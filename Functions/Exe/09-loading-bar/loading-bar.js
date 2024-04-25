function loadingBar(number) {

    let percentString = "%".repeat(Math.trunc(number / 10));
    let dotString = ".".repeat(Math.trunc(100 / 10) - Math.trunc(number / 10));
    let result = `${number}% [${percentString}${dotString}]`;

    if(number === 100) {
        console.log('100% Complete!');
        console.log(`[${percentString}]`)
    } else {
        console.log(result);
        console.log('Still loading...');
    }
    
}

loadingBar(90);