"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { CarouselComponent } from "./_component/Carousel";
import { MovieSection } from "./_component/MovieSection";
import { Header } from "./_component/Header";
import { Footer } from "./_component/Footer";

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

        const nowPlayingRes = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          { headers }
        );
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
      <Header />

      <CarouselComponent nowPlayingMovies={nowPlayingMovies} />

      <MovieSection
        title="Popular"
        categoryName="popular"
        showButton={true}
        page={1}
        totalPages={1}
      />
      <MovieSection
        title="Top Rated"
        categoryName="top_rated"
        showButton={true}
        page={1}
        totalPages={1}
      />
      <MovieSection
        title="Upcoming"
        categoryName="upcoming"
        showButton={true}
        page={1}
        totalPages={1}
      />

      <Footer />
    </div>
  );
}
