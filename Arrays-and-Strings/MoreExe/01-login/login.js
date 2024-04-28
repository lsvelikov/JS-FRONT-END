function login(stringsArr) {

    function reversePass(password) {
        return password.split('').reverse().join('');
    }

    const username = stringsArr[0];
    let tryCounter = 0;
    for(let i = 1; i < stringsArr.length; i++) {
        let currentPass = reversePass(stringsArr[i]);

        if(username === currentPass) {
            console.log(`User ${username} logged in.`);
            break;
        } else if(tryCounter >= 3) {
            console.log(`User ${username} blocked!`);
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }
        tryCounter++;  
    }
}

login(['Acer','login','go','let me in','recA']);