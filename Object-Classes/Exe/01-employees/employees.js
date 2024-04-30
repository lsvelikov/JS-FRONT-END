function printEmployees(employees) {

    const employee = {};

    for(const name of employees) {
        employee[name] = name.length;
        console.log(`Name: ${name} -- Personal Number: ${employee[name]}`);
    }
}

printEmployees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);
