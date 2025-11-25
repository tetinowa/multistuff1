"use client";

import { Button } from "@/src/components/ui/button";
import { MovieCard } from "./MovieCard";
import { Movie } from "./MovieCard"


type MovieSectionProps = {
  title: string;
  movies: Movie[];
  categoryName?: string;
  showButton?: boolean;
};

export default function MovieSection({ title, movies }: MovieSectionProps) {
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
