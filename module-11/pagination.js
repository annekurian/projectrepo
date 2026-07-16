var findMoviesByGenre = function (genre, pageNumber, pageSize) {
  var toSkip = 0;
  if (pageNumber >= 2) toSkip = (pageNumber - 1) * pageSize;

  let movies = db.movies
    .find({ genres: genre }, { title: 1, "imdb.rating": 1, _id: 0 })
    .sort({ "imdb.rating": -1 })
    .skip(toSkip)
    .limit(pageSize)
    .toArray();
  print("***********Page: " + pageNumber);
  for (var i = 0; i < movies.length; i++) {
    print(movies[i].title);
  }
};
