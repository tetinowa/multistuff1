import { Moon, Search, Film } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/src/components/ui/navigation-menu";
import Link from "next/link";

export const Header = () => {



  
  return (
    <div className="bg-white h-[59px] border-b px-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Film className="w-5 h-5 text-indigo-700" />
          <h1 className="font-bold text-[16px] text-[#4338CA] italic">
            Movie Z
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 w-[97px]">
                Genre
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[577px] rounded-lg border p-5">
                <div className="flex flex-col gap-4">
                  <h1>Genres</h1>
                  <h2>See the list of genres</h2>
                </div>

                <div className="p-4 w-48">
                  <NavigationMenuLink className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Action
                  </NavigationMenuLink>
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
  );
};
