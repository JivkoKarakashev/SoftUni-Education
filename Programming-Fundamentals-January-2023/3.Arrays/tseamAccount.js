function tseamAccount(inputArray) {

    let index = 0;
    let installedGamesStr = String(inputArray[index]);
    let installedGamesArray = installedGamesStr.split(' ');
    index++;
    let commandAndGameStr = String(inputArray[index]);
        
    while (commandAndGameStr !== 'Play!') {        
        
        let currGame = '';
        
        if (commandAndGameStr.includes('Install')) {
            currGame = commandAndGameStr.slice(8);
            if (!installedGamesArray.includes(currGame)) {
                installedGamesArray.push(currGame);
            }
            
        } else if (commandAndGameStr.includes('Uninstall')) {
            currGame = commandAndGameStr.slice(10);
            if (installedGamesArray.includes(currGame)) {
                let gameIndex = installedGamesArray.indexOf(currGame);
                installedGamesArray.splice(gameIndex, 1);
                // console.log(installedGamesArray)
            }
            
        } else if (commandAndGameStr.includes('Update')) {
            currGame = commandAndGameStr.slice(7);
            if (installedGamesArray.includes(currGame)) {
                let gameIndex = installedGamesArray.indexOf(currGame);
                installedGamesArray.splice(gameIndex, 1);
                installedGamesArray.push(currGame);
                // console.log(installedGamesArray)
            }
            
        } else if (commandAndGameStr.includes('Expansion')) {
            let expensionGame = '';
            let expension = '';
            currGame = commandAndGameStr.slice(10);
            if (currGame.includes('-')) {
                let expensionArr = currGame.split('-');            
                expensionGame = expensionArr[0];
                expension = expensionArr[1];
                // currGame = `${expensionGame}:${expension}`
            }
            if (installedGamesArray.includes(expensionGame)) {
                let gameIndex = installedGamesArray.indexOf(expensionGame);
                game = `${expensionGame}:${expension}`
                installedGamesArray.splice(gameIndex + 1, 0, game);
                // console.log(installedGamesArray)
            }
        }
        
        index++;
        commandAndGameStr = String([inputArray[index]]);                
    }    
    console.log(installedGamesArray.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])

// tseamAccount(['CS WoW Diablo',
//     'Uninstall XCOM',
//     'Update PeshoGame',
//     'Update WoW',
//     'Expansion Civ-V',
//     'Play!'])
