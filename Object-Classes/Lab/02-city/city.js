function printCityInfo(city) {

    // for (const key in city) {
    //     console.log(`${key} -> ${city[key]}`);
    // }

    Object.keys(city).forEach(propertyName => console.log(`${propertyName} -> ${city[propertyName]}`));
}

printCityInfo({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria" ,postCode: "1000"});