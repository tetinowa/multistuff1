"use client";
import Image from "next/image";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/src/components/ui/navigation-menu";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Moon, Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <div className="w-full max-w-md">
    //     <Card className="w-[480px] h-[655px] rounded-xl flex justify-between p-8">
    //       <div className="flex gap-7 flex-col">
    //         <CardHeader className="flex flex-col gap-2 justify-start">
    //           <img className="w-[60px] h-[60px]" src="/logo.png" />
    //           <CardTitle>Join Us! 😎</CardTitle>
    //           <CardDescription>
    //             Please provide all current information accurately.
    //           </CardDescription>
    //         </CardHeader>

    //         <CardContent>
    //           <FieldSet>
    //             <FieldGroup>
    //               <Field>
    //                 <FieldLabel htmlFor="firstname">First Name</FieldLabel>
    //                 <Input id="firstname" type="text" placeholder="Arthur" />
    //                 <FieldDescription>
    //                   First name cannot contain special characters or numbers.
    //                 </FieldDescription>
    //               </Field>
    //               <Field>
    //                 <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
    //                 <Input
    //                   id="lastname"
    //                   type="text"
    //                   placeholder="Nightingale"
    //                 />
    //                 <FieldDescription>
    //                   Last name cannot contain special characters or numbers.
    //                 </FieldDescription>
    //               </Field>
    //               <Field>
    //                 <FieldLabel htmlFor="username">Username</FieldLabel>
    //                 <FieldDescription>
    //                   This username is already taken. Please choose another one.
    //                 </FieldDescription>
    //                 <Input id="username" type="text" placeholder="Excalibur" />
    //               </Field>
    //             </FieldGroup>
    //           </FieldSet>
    //         </CardContent>
    //       </div>

    //       <CardFooter className="flex justify-center items-center">
    //         <Button>Continue 1/3</Button>
    //       </CardFooter>
    //     </Card>
    //   </div>
    // </div>
    <div>
    <div className="bg-white w-dvw h-[59px] border-b pl-4 pr-4 flex">
      <div className="w-7xl flex justify-center items-center">
        <div className="flex gap-2">
          <img src="/src/movie/ico/film.svg" className="w-5 h-5"></img>
          <h1 className="font-sans font-bold text-[16px] leading-5 tracking-[2%] text-center text-[#4338CA] italic">
            Movie Z
          </h1>
        </div>
        <div className="flex gap-3">
          <NavigationMenu className="bg-white w-[97px] h-9 rounded-md border pt-2 pr-4 pb-2 pl-4 flex gap-2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center w-[379px] rounded-lg border pl-3 pr-3 gap-2.5 bg-white">
            <Search></Search>
            {/* <Unstyled as={Input} type="text" placeholder="Psda" /> */}
            <Input
              className="border-0 outline-0 shadow-none"
              placeholder="Search..."
            ></Input>
          </div>
        </div>
        <Moon></Moon>
      </div>
    </div>
    <div>
   <Carousel>
    <CarouselContent>
       <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
         <CarouselItem>...</CarouselItem>
    </CarouselContent>
     <CarouselPrevious></CarouselPrevious>
     <CarouselNext></CarouselNext>
   </Carousel>
    </div>
    </div>
  );
}
