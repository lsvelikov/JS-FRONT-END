function printPhoneBook(arr) {

    const phoneBook = {};

    for (const line of arr) {
        const[name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

printPhoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);