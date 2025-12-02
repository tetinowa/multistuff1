import { Card } from "@/src/components/ui/card";
import { CardContent } from "@/src/components/ui/card";
import { Star } from "lucide-react";

export type Movie = {
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
  movieCategory: string;
};

export const MovieCard = ({ movie }: { movie: Movie }) => (
  <Card className="w-full border-0 shadow-none bg-transparent overflow-hidden group cursor-pointer">
    <CardContent className="p-0 bg-[#F4F4F5 gap-[4px]]">
      <div className="relative aspect-2/3 rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{movie.vote_average.toFixed(1)}</span>
        </div>
        <h3 className="text-sm font-medium line-clamp-1">{movie.title}</h3>
      </div>
    </CardContent>
  </Card>
);