"use client"

import MovieSection from "@/app/_component/MovieSection";
import { use } from "react";
import {NavigationMenu} from "@/src/components/ui/navigation-menu";
import {NavigationMenuList} from "@/src/components/ui/navigation-menu"
import {NavigationMenuItem} from "@/src/components/ui/navigation-menu"
import {NavigationMenuTrigger} from "@/src/components/ui/navigation-menu"
import {NavigationMenuContent} from "@/src/components/ui/navigation-menu"
import {NavigationMenuLink} from "@/src/components/ui/navigation-menu"
import { Input } from "@/src/components/ui/input";
import { Search, Moon } from "lucide-react";
import { useEffect, useState } from "react";



export const CategorySectionDetail = ({ params }) => {
  const { categoryName } = use(params);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${categoryName}?api_key=YOURKEY`);
      const data = await res.json();
      setMovies(data.results || []);
    }
    load();
  }, [categoryName]);

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
    <div className=" gap-96 bg-red-200">
      <MovieSection
        movies={[]}
        categoryName={categoryName}
        title={categoryName}
        showButton={false}
      />
    </div>


   <div className=" gap-96 bg-red-200">
      <MovieSection
        movies={[]}
        title={categoryName}
        showButton={false}
      />
    </div>
    </div>
  );
};
console.log(CategorySectionDetail);
export default CategorySectionDetail;



