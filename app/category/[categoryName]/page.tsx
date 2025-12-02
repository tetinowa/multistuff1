"use client";

import { MovieSection } from "@/app/_component/MovieSection";
import { use } from "react";
import { Pagination1 } from "@/app/_component/Pagination";
import { Header } from "@/app/_component/Header";
import { Footer } from "@/app/_component/Footer";

type Params = {
  categoryName: string;
};

export default function CategoryPage({ params }: { params: Promise<Params> }) {
  const { categoryName } = use(params);
  const formatTitle = (name: string) => {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MovieSection
        categoryName={categoryName}
        title={formatTitle(categoryName)}
        showButton={false}
      />
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Pagination1 className="flex justify-end" />
      </div>
      <Footer />
    </div>
  );
}
