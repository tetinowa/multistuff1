const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVkZDM3MjkzOTUyNTQyMTY0MjVjMDhmNDE4NWUxMSIsIm5iZiI6MTc2MzUyMzY0NC41MjMsInN1YiI6IjY5MWQzYzNjNmNjNDMzNzcxZTJkNDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkj8IUzuYcVwEahuxYgQAmfdV46-3VWJP3Rbm6rIUJ8",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

console.log(options);
