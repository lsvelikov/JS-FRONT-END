function solve(numberOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    let totalPrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            switch (typeOfGroup) {
                case "Students":
                    price = 8.45;
                    break;
                case "Business":
                    price = 10.90;
                    break;
                case "Regular":
                    price = 15;
                    break;
            }
            break;
        case "Saturday":
            switch (typeOfGroup) {
                case "Students":
                    price = 9.80;
                    break;
                case "Business":
                    price = 15.60;
                    break;
                case "Regular":
                    price = 20;
                    break;
            }
            break;
        case "Sunday":
            switch (typeOfGroup) {
                case "Students":
                    price = 10.46;
                    break;
                case "Business":
                    price = 16;
                    break;
                case "Regular":
                    price = 22.50;
                    break;
            }
        default:
            break;
    }

    totalPrice = price * numberOfPeople;
    if (typeOfGroup === "Students" && numberOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === "Business" && numberOfPeople >= 100) {
        totalPrice = (numberOfPeople - 10) * price;
    } else if (typeOfGroup === "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,

    "Students",
    
    "Sunday");