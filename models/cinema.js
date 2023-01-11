const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function (){
  const titles = []
  this.films.forEach((film) =>  {
    titles.push(film.title)

  })
  return titles
} 

Cinema.prototype.filmsByGenre = function(genreToFind){
  const filmGenre = this.films.filter((film) => {
    return film.genre === genreToFind
  })
  return filmGenre
  }

Cinema.prototype.totalRunningTimeOfAllFilms = function(){
  let filmArray = []
  const filmList = this.films.forEach((film) => {
    filmArray.push(film.length)
  })
  const total = filmArray.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue
  }, 0)
  return total
}
Cinema.prototype.findFilmByTitle = function(titleToFind){
  const filmTitle = this.films.filter((film) => {
    return film.title === titleToFind
  })
  return filmTitle
}

Cinema.prototype.checkFilmByYear = function (yearToFind) {
  const filmYear = this.films.filter((film) => {
    return film.year === yearToFind
  })
  return filmYear
}

Cinema.prototype.filmOverLength = function (lengthToFind) {
  const filmLength = this.films.filter((film) => {
    return film.length > lengthToFind
  })
  return filmLength
}

module.exports = Cinema;
