function playList(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const rotations = arr.shift();
    const songsType = arr.pop();

    for(let i = 0; i < rotations; i++) {
        let currentType = arr[i].split('_')[0];
        let songName = arr[i].split('_')[1];
        let duration = arr[i].split('_')[2];
        let result = new Song(currentType, songName, duration);

        if(currentType === songsType) {
            console.log(`${songName}`);
        } else if(songsType === 'all') {
            console.log(`${songName}`);
        }
    }
}

playList([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all']);