function printTowns(input) {

    const towns = [];

    for(const line of input) {
        const[townName, latitude, longitude] = line.split(' | ');
        
        const town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
    
        towns.push(town);

        console.log(town);
    }  
}

printTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);