"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { Moon, Search, Star, Play, Plus } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/src/components/ui/navigation-menu";
import {
  Card,
  CardContent,
} from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

import { MovieCard } from "./_component/MovieCard";
import Link from 'next/link';

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
};

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const headers = {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVkZDM3MjkzOTUyNTQyMTY0MjVjMDhmNDE4NWUxMSIsIm5iZiI6MTc2MzUyMzY0NC41MjMsInN1YiI6IjY5MWQzYzNjNmNjNDMzNzcxZTJkNDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkj8IUzuYcVwEahuxYgQAmfdV46-3VWJP3Rbm6rIUJ8`,
          accept: "application/json",
        };

        const [upcomingRes, popularRes, topRatedRes, nowPlayingRes] = await Promise.all([
          fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", { headers }),
          fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", { headers }),
          fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", { headers }),
          fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", { headers }),
        ]);

        const upcomingData = (await upcomingRes.json()) as Response;
        const popularData = (await popularRes.json()) as Response;
        const topRatedData = (await topRatedRes.json()) as Response;
        const nowPlayingData = (await nowPlayingRes.json()) as Response;

        setUpcomingMovies(upcomingData.results || []);
        setPopularMovies(popularData.results || []);
        setTopRatedMovies(topRatedData.results || []);
        setNowPlayingMovies(nowPlayingData.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      <div className="bg-white h-[59px] border-b px-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-indigo-700 rounded flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm" />
          </div>
          <h1 className="font-bold text-[16px] text-[#4338CA] italic">Movie Z</h1>
        </div>

        <div className="flex items-center gap-3">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 w-[97px]">Genre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48">
                    <NavigationMenuLink className="block px-3 py-2 hover:bg-gray-100 rounded">Action</NavigationMenuLink>
                    <NavigationMenuLink className="block px-3 py-2 hover:bg-gray-100 rounded">Drama</NavigationMenuLink>
                    <NavigationMenuLink className="block px-3 py-2 hover:bg-gray-100 rounded">Comedy</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center w-[379px] rounded-lg border px-3 gap-2.5 bg-white h-9">
            <Search className="w-4 h-4 text-gray-400" />
            <Input
              className="border-0 outline-0 shadow-none h-8 p-0"
              placeholder="Search..."
            />
          </div>
        </div>

        <Moon className="w-5 h-5 cursor-pointer text-gray-600" />
      </div>

   
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
                          <Play className="w-4 h-4 fill-black" />
                          Watch Trailer
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                          <Plus className="w-4 h-4" />
                          Add to List
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming</h2>
          <Button variant="link" className="text-indigo-600">See more →</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {upcomingMovies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular</h2>
          <Button variant="link" className="text-indigo-600">See more →</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {popularMovies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Rated</h2>
          <Button variant="link" className="text-indigo-600">See more →</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topRatedMovies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <footer className="bg-indigo-700 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-indigo-700 rounded-sm" />
                </div>
                <h1 className="font-bold text-lg italic">Movie Z</h1>
              </div>
              <p className="text-sm text-indigo-200">© 2024 Movie Z. All Rights Reserved.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-sm text-indigo-200">Email:</p>
              <p className="text-sm">support@moviez.com</p>
              <p className="text-sm text-indigo-200 mt-2">Phone:</p>
              <p className="text-sm">+976 123 456 7890</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-indigo-200">Facebook</a>
                <a href="#" className="hover:text-indigo-200">Instagram</a>
                <a href="#" className="hover:text-indigo-200">Twitter</a>
                <a href="#" className="hover:text-indigo-200">Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}