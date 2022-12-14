"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: parseInt(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классичекий зритель!');
    }
    else if (personalMovieDB.count >= 30){
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
    
}

detectPersonalLevel();




function remeberMyFilms () {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?', '').trim();
        const b = prompt('На сколько оцените его?', '').trim();
    
        if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;   
        } else {
            i--;
        }
    
    }
}

remeberMyFilms();

function writeYourGenres() {

    for(let i = 0; i <= 2; i++) {
       const  favoriteGenre = prompt(`Ваш любимый жанр под номером - ${i + 1}`);

       personalMovieDB.genres[i] = favoriteGenre;
    }

}

writeYourGenres();


function showMyDB (hidden) {

    if(hidden) {
        alert('База данных приватна!');
    } else {
        // document.write(JSON.stringify(personalMovieDB));
        console.log(personalMovieDB);
    }
    }
    
    showMyDB(personalMovieDB.privat);

