export const fetchMovies = async (searchMovie, page) => {
  const apiPage = page != undefined ? parseFloat(page) + 1 : 1;
  
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=8e2acd21&s=" +
      searchMovie +
      "&page=" +
      apiPage
  );
  const result = await response.json();
  // console.log('result',result)
  return result;
};
