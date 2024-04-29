function findAddressByName(arr) {

    const addressBook = {};

    for(let line of arr) {
        const[name, address] = line.split(':');
        addressBook[name] = address;
    }


    Object.entries(addressBook)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`));


}

findAddressByName(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);