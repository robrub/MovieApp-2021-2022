// Oggetto Javascript
const single_movie = {
  Title: "Terminator 2: Judgment Day",
  Year: "1991",
  Rated: "R",
  Released: "03 Jul 1991",
  Runtime: "137 min",
  Genre: "Action, Sci-Fi",
  Director: "James Cameron",
  Writer: "James Cameron, William Wisher",
  Actors: "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
  Plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
  Language: "English, Spanish",
  Country: "United States",
  Awards: "Won 4 Oscars. 36 wins & 33 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.6/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "93%",
    },
    {
      Source: "Metacritic",
      Value: "75/100",
    },
  ],
  Metascore: "75",
  imdbRating: "8.6",
  imdbVotes: "1,065,526",
  imdbID: "tt0103064",
  Type: "movie",
  DVD: "13 Feb 2007",
  BoxOffice: "$205,881,154",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};
console.log(single_movie);

// Posso trasformare un oggetto Javascript in una stringa JSON
const stringified_movie = JSON.stringify(single_movie);
console.log(stringified_movie);

// Posso prendere una stringa JSON e trasformarla in un oggetto Javascript
const new_single_movie_Object = JSON.parse(stringified_movie);
console.log(new_single_movie_Object);