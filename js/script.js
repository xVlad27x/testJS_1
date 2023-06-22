'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films heve you alreadu watched?', '');
 
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films heve you alreadu watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('One of the last movies you watched?', ''),
//     b = prompt('How much would you rate it?', ''),
//     c = prompt('One of the last movies you watched?', ''),
//     d = prompt('How much would you rate it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// Вариант с for -- начало
// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the last movies you watched?', ''),
//         b = prompt('How much would you rate it?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }
// Вариант с for -- конец

// Вариант с while -- начало
// let num = 0;

// while (num < 2) {
//     const a = prompt('One of the last movies you watched?', ''),
//         b = prompt('How much would you rate it?', '');
//     num++;
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         num--;
//     }
// }
// Вариант с while -- конец

// Вариант с do while -- начало
// let num = 0;
// do {
//     const a = prompt('One of the last movies you watched?', ''),
//         b = prompt('How much would you rate it?', '');
//     num++;
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         num--;
//     }
// }
// while (num < 2);
// Вариант с do while -- конец

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
            b = prompt('How much would you rate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало смотришь фильмецов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Норм смотришь фильмецов');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ты задрот');
    } else {
        console.log('Ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();