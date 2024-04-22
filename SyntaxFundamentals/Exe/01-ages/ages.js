function ages(age) {
    let ageRange = '';
    if (age >= 66) {
        ageRange = 'elder';
    } else if (age >= 20) {
        ageRange = 'adult';
    } else if (age >= 14) {
        ageRange = 'teenager';
    } else if (age >= 3) {
        ageRange = 'child';
    } else if (age >= 0) {
        ageRange = 'baby';
    } else {
        ageRange = 'out of bounds';
    }
    console.log(ageRange);
}
ages(-1);