function meetings(arr) {
    const meetingsList = {};

    for(const line of arr) {
        const[day, name] = line.split(' ');
        if(!meetingsList.hasOwnProperty(day)) {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
        
    }

    for(const meeting in meetingsList) {
        console.log(`${meeting} -> ${meetingsList[meeting]}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);