function objectToJson(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName,
        hairColor,
    }

    let result = JSON.stringify(person);
    console.log(result);
}

objectToJson('George', 'Jones', 'Brown');