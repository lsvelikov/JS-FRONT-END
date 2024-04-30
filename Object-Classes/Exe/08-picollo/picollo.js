function parkingTrack(cars) {

    let parking = new Set();

    cars.forEach(car => {
        let direction = car.split(', ')[0];
        let carNumber = car.split(', ')[1];

        if (direction === 'IN') {
            parking.add(carNumber);
        } else if (direction === 'OUT') {
            parking.delete(carNumber);
        }
    });

    let sortedParking = [...parking].sort();
    if (parking.size > 0) {
        sortedParking.forEach(car => console.log(car));
    } else {
        console.log('Parking Lot is Empty');
    }
}

parkingTrack(
    ['IN, CA2844AA',

        'IN, CA1234TA',

        'OUT, CA2844AA',

        'OUT, CA1234TA']);