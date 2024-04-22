function solve(currentSpeed, area) {

    let speedLimit = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }
    let speedDifference = currentSpeed - speedLimit;
    if(speedDifference <= 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
    
    let speedStatus = '';
    if(speedDifference <= 20) {
        speedStatus = 'speeding';
    } else if(speedDifference <= 40) {
        speedStatus = 'excessive speeding';
    } else {
        speedStatus = 'reckless driving';
    }
    if(speedDifference > 0) {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`);
    }
    
}
solve(40, 'city');