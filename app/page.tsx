"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { Moon, Search } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { CarouselComponent } from "./_component/Carousel";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/src/components/ui/navigation-menu";
import { MovieSection } from './_component/MovieSection';
import { Footer } from './_component/Footer';

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const headers = {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVkZDM3MjkzOTUyNTQyMTY0MjVjMDhmNDE4NWUxMSIsIm5iZiI6MTc2MzUyMzY0NC41MjMsInN1YiI6IjY5MWQzYzNjNmNjNDMzNzcxZTJkNDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkj8IUzuYcVwEahuxYgQAmfdV46-3VWJP3Rbm6rIUJ8`,
          accept: "application/json",
        };

        const nowPlayingRes = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", { headers });
        const nowPlayingData = (await nowPlayingRes.json()) as Response;
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
      
      <CarouselComponent nowPlayingMovies={nowPlayingMovies} />

      <MovieSection 
        title="Popular" 
        categoryName="popular" 
        showButton={true} 
      />

      <MovieSection 
        title="Top Rated" 
        categoryName="top_rated" 
        showButton={true} 
      />

      <MovieSection 
        title="Upcoming" 
        categoryName="upcoming" 
        showButton={true} 
      />

      <Footer />
    </div>
  );
}