function solve(dayOfWeek, age) {
    let price = 0;
    if (dayOfWeek === "Weekday") {
        if(age >= 0 && age <= 18) {
            price = 12;
        } else if(age >= 19 && age <= 64) {
            price = 18;
        } else if(age >= 65 && age <= 122) {
            price = 12;
        } else {
            console.log("Error!");
        }
    } else if (dayOfWeek === "Weekend") {
        if(age >= 0 && age <= 18) {
            price = 15;
        } else if(age >= 19 && age <= 64) {
            price = 20;
        } else if(age >= 65 && age <= 122) {
            price = 15;
        } else {
            console.log("Error!");
        }
    } else if (dayOfWeek === "Holiday") {
        if(age >= 0 && age <= 18) {
            price = 5;
        } else if(age >= 19 && age <= 64) {
            price = 12;
        } else if(age >= 65 && age <= 122) {
            price = 10;
        } else {
            console.log("Error!");
        }
    } else {
        console.log("Error!");
    }
    if(price != 0){
        console.log(price + "$");
    }
}
solve('Holiday', -12);