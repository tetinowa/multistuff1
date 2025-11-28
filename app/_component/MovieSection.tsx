"use client";

import { Button } from "@/src/components/ui/button";
import { MovieCard } from "./MovieCard";
import { useState, useEffect } from "react";


type MovieSectionProps = {
  title: string;
  categoryName: string;
  showButton: boolean;
};

export const MovieSection = (props: MovieSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { categoryName, title, showButton} = props;


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVkZDM3MjkzOTUyNTQyMTY0MjVjMDhmNDE4NWUxMSIsIm5iZiI6MTc2MzUyMzY0NC41MjMsInN1YiI6IjY5MWQzYzNjNmNjNDMzNzcxZTJkNDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkj8IUzuYcVwEahuxYgQAmfdV46-3VWJP3Rbm6rIUJ8`,
          },
        }
      );
      const data = await res.json();

      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>

        <Button variant="link" className="text-indigo-600">
          See more →
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
