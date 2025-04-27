function gramophone(bandName, albumName, songName){

    let songDuration = albumName.length * bandName.length * songName.length / 2;
    let plateRotationCount = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${plateRotationCount} times.`)
}

gramophone('Rammstein', 'Sehnsucht', 'Engel')