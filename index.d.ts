type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  categoryName: string;
  movieCategory: string;
};
type MovieDetail = {
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
  title: string;
  overview: string;
  id: number;
  release_date: string;
  runtime: number;
};
type Genre = {
  id: number;
  name: string;
};