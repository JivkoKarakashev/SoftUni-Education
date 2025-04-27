function songs(inputArray){

    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
        print(){
            console.log(this.name);
        }        
    }

    let songsCount = Number(inputArray.shift());
    let listType = inputArray.pop();
    
    for (let i = 0; i < songsCount; i++){
        let songLyneArray = inputArray[i].split('_');
        let [sType, sName, sTime] = [...songLyneArray];
        
        let currentSongObj = new Song(sType, sName, sTime);
        if (sType === listType || listType === 'all'){
            currentSongObj.print();
        } else {
            continue;
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
console.log('-------------------')
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
console.log('-------------------')
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])