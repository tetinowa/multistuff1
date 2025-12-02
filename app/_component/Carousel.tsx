import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Moon, Search, Star, Play, Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export const CarouselComponent = ({ nowPlayingMovies }: { nowPlayingMovies: Movie[] }) => (

<div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {nowPlayingMovies.slice(0, 5).map((movie) => (
              <CarouselItem key={movie.id}>
                <div className="relative h-[500px] w-full">
                  <div className="absolute inset-0">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                  </div>
                  
                  <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
                    <div className="max-w-xl space-y-4 text-white">
                      <div className="text-sm font-medium">Now Playing</div>
                      <h1 className="text-5xl font-bold">{movie.title}</h1>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-semibold">{movie.vote_average.toFixed(1)}</span>
                        </div>
                        <span className="text-gray-300">{new Date(movie.release_date).getFullYear()}</span>
                      </div>
                      <p className="text-gray-200 line-clamp-3">{movie.overview}</p>
                      <div className="flex gap-3 pt-2">
                        <Button className="bg-white text-black hover:bg-gray-200 gap-2">
                          <Play className="w-4 h-4" />
                          Watch Trailer
                        </Button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>);