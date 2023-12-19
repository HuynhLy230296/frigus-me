import React from "react";
import { Button } from "./button";

export default function HeroSection() {
  return (
    <div
      className="relative
    min-h-screen
    flex flex-col items-center justify-center
    bg-[url('/hero-section-background.jpeg')] 
    bg-bottom bg-no-repeat bg-cover w-full 
    before:[clip-path:polygon(0%_0%,0%_100%,100%_100%)] 
    before:bg-primary before:-bottom-1 before:absolute before:w-full before:h-32 before:z-10
    after:absolute
    after:top-0
    after:left-0
    after:bg-opacity-40
    after:bg-black
    after:w-full
    after:h-full
    "
    >
      <div className="flex flex-col container text-white items-center z-50">
        <h3 className="text-4xl">We are</h3>
        <h1 className="text-9xl m-6">STUDIO</h1>
        <h5 className="text-md italic max-w-md text-center">
          Digital marketing strategies enhance revenue growth expectancy nearly
          3 times over.
        </h5>
        <Button variant="outline" size="lg" className="mt-4">
          Talk with us
        </Button>
      </div>
    </div>
  );
}
