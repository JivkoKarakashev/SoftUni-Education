function movies(inputArray) {

    class Movie {
        constructor(name) {
            this.name = name;
        }
    }

    let addMovie = (arr, newObj) => {
        arr.push(newObj);
        return arr;
    }
    let directedBy = (arr, title, director) => {
        for (let obj of arr) {
            if (obj.name === title) {
                obj.director = director;
                return arr;
            }
        }
        return arr;
    }
    let onDate = (arr, title, date) => {
        for (let obj of arr) {
            if (obj.name === title) {
                obj.date = date;
                return arr;
            }
        }
        return arr;
    }
    let moviesLibArrOfObj = [];

    let inputArrayLength = inputArray.length;
    for (let i = 0; i < inputArrayLength; i++) {
        let command;
        let movieName;
        let movieDate;
        let movieDirector;
        if (inputArray[i].includes('addMovie')) {
            command = inputArray[i].slice(0, 8);
            movieName = inputArray[i].slice(9);
            let newMovie = new Movie(movieName);
            addMovie(moviesLibArrOfObj, newMovie);
        } else if (inputArray[i].includes('directedBy')) {
            let idx = inputArray[i].indexOf('directedBy');
            movieName = inputArray[i].slice(0, idx - 1);
            command = inputArray[i].slice(idx, idx + 10);
            movieDirector = inputArray[i].slice(idx + 11);
        } else if (inputArray[i].includes('onDate')) {
            let idx = inputArray[i].indexOf('onDate');
            movieName = inputArray[i].slice(0, idx - 1);
            command = inputArray[i].slice(idx, idx + 6);
            movieDate = inputArray[i].slice(idx + 7);
            // console.log(movieName)
            // console.log(command)
            // console.log(movieDate)
        }
        switch (command) {
            case 'directedBy': directedBy(moviesLibArrOfObj, movieName, movieDirector); break;
            case 'onDate': onDate(moviesLibArrOfObj, movieName, movieDate); break;
            default: ; break;
        }
    }
    for (let obj of moviesLibArrOfObj) {
        if (obj.name !== undefined && obj.date !== undefined && obj.director !== undefined) {
            let objStringify = JSON.stringify(obj);
            console.log(objStringify)
        }
    }
    console.log(moviesLibArrOfObj)
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
console.log('--------------------------------------------------------------------')
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])