"use client";
import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
export default function WorkSection() {
  return (
    <div
      className="relative
        min-h-screen
        flex flex-col items-center w-full bg-primary
        before:[clip-path:polygon(100%_0%,0%_0%,100%_100%)] 
        before:bg-primary before:-bottom-32 before:absolute before:w-full before:h-32 before:z-10"
      id="works"
    >
      <div className="flex flex-col container text-black z-50 w-50">
        <h1 className="text-7xl my-6">WORKS</h1>
        <h5 className="text-md italic max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          labore ad minima, minus vero at facere. Asperiores voluptatum
          voluptates commodi.
        </h5>
        <div className="flex flex-col items-center mt-24">
          <div className="w-4/5">
            <Slider {...settings}>
              <div
                className="group relative 
                w-[350px] h-[350px] 
                bg-bottom bg-no-repeat bg-cover 
                rounded-full 
                bg-[url('/hero-section-background.jpeg')]"
              >
                <div
                  className="
                absolute 
                rounded-full
                top-0 
                left-0 
                w-full
                h-0 flex flex-col justify-center items-center 
                opacity-0 
                group-hover:h-full 
                group-hover:opacity-100
                group-hover:bg-opacity-40
                group-hover:bg-black
                duration-300"
                >
                  <h1 className="text-md text-white px-4 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, excepturi!
                  </h1>
                  <AlertDialog>
                    <AlertDialogTrigger className="text-md text-primary px-4 pt-4 text-center duration-300 hover:text-white">
                      Know more
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl shadow-none bg-transparent border-0">
                      <AlertDialogHeader>
                        <AlertDialogTitle asChild className="flex">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              alt="product-image"
                              src="/hero-section-background.jpeg"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <h3 className="text-white italic text-xl">
                            Photography is the art, application and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation, either electronically by
                            means of an image sensor, or chemically by means of
                            a light-sensitive material such as photographic
                            film. It is employed in many fields of science,
                            manufacturing (e.g., photolithography), and
                            business, as well as its more direct uses for art,
                            film and video production, recreational purposes,
                            hobby, and mass communication.
                          </h3>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div
                className="group relative 
                w-[350px] h-[350px] 
                bg-bottom bg-no-repeat bg-cover 
                rounded-full 
                bg-[url('/hero-section-background.jpeg')]"
              >
                <div
                  className="
                absolute 
                rounded-full
                top-0 
                left-0 
                w-full
                h-0 flex flex-col justify-center items-center 
                opacity-0 
                group-hover:h-full 
                group-hover:opacity-100
                group-hover:bg-opacity-40
                group-hover:bg-black
                duration-300"
                >
                  <h1 className="text-md text-white px-4 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, excepturi!
                  </h1>
                  <AlertDialog>
                    <AlertDialogTrigger className="text-md text-primary px-4 pt-4 text-center duration-300 hover:text-white">
                      Know more
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl shadow-none bg-transparent border-0">
                      <AlertDialogHeader>
                        <AlertDialogTitle asChild className="flex">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              alt="product-image"
                              src="/hero-section-background.jpeg"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <h3 className="text-white italic text-xl">
                            Photography is the art, application and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation, either electronically by
                            means of an image sensor, or chemically by means of
                            a light-sensitive material such as photographic
                            film. It is employed in many fields of science,
                            manufacturing (e.g., photolithography), and
                            business, as well as its more direct uses for art,
                            film and video production, recreational purposes,
                            hobby, and mass communication.
                          </h3>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div
                className="group relative 
                w-[350px] h-[350px] 
                bg-bottom bg-no-repeat bg-cover 
                rounded-full 
                bg-[url('/hero-section-background.jpeg')]"
              >
                <div
                  className="
                absolute 
                rounded-full
                top-0 
                left-0 
                w-full
                h-0 flex flex-col justify-center items-center 
                opacity-0 
                group-hover:h-full 
                group-hover:opacity-100
                group-hover:bg-opacity-40
                group-hover:bg-black
                duration-300"
                >
                  <h1 className="text-md text-white px-4 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, excepturi!
                  </h1>
                  <AlertDialog>
                    <AlertDialogTrigger className="text-md text-primary px-4 pt-4 text-center duration-300 hover:text-white">
                      Know more
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl shadow-none bg-transparent border-0">
                      <AlertDialogHeader>
                        <AlertDialogTitle asChild className="flex">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              alt="product-image"
                              src="/hero-section-background.jpeg"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <h3 className="text-white italic text-xl">
                            Photography is the art, application and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation, either electronically by
                            means of an image sensor, or chemically by means of
                            a light-sensitive material such as photographic
                            film. It is employed in many fields of science,
                            manufacturing (e.g., photolithography), and
                            business, as well as its more direct uses for art,
                            film and video production, recreational purposes,
                            hobby, and mass communication.
                          </h3>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div
                className="group relative 
                w-[350px] h-[350px] 
                bg-bottom bg-no-repeat bg-cover 
                rounded-full 
                bg-[url('/hero-section-background.jpeg')]"
              >
                <div
                  className="
                absolute 
                rounded-full
                top-0 
                left-0 
                w-full
                h-0 flex flex-col justify-center items-center 
                opacity-0 
                group-hover:h-full 
                group-hover:opacity-100
                group-hover:bg-opacity-40
                group-hover:bg-black
                duration-300"
                >
                  <h1 className="text-md text-white px-4 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, excepturi!
                  </h1>
                  <AlertDialog>
                    <AlertDialogTrigger className="text-md text-primary px-4 pt-4 text-center duration-300 hover:text-white">
                      Know more
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl shadow-none bg-transparent border-0">
                      <AlertDialogHeader>
                        <AlertDialogTitle asChild className="flex">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              alt="product-image"
                              src="/hero-section-background.jpeg"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <h3 className="text-white italic text-xl">
                            Photography is the art, application and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation, either electronically by
                            means of an image sensor, or chemically by means of
                            a light-sensitive material such as photographic
                            film. It is employed in many fields of science,
                            manufacturing (e.g., photolithography), and
                            business, as well as its more direct uses for art,
                            film and video production, recreational purposes,
                            hobby, and mass communication.
                          </h3>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div
                className="group relative 
                w-[350px] h-[350px] 
                bg-bottom bg-no-repeat bg-cover 
                rounded-full 
                bg-[url('/hero-section-background.jpeg')]"
              >
                <div
                  className="
                absolute 
                rounded-full
                top-0 
                left-0 
                w-full
                h-0 flex flex-col justify-center items-center 
                opacity-0 
                group-hover:h-full 
                group-hover:opacity-100
                group-hover:bg-opacity-40
                group-hover:bg-black
                duration-300"
                >
                  <h1 className="text-md text-white px-4 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, excepturi!
                  </h1>
                  <AlertDialog>
                    <AlertDialogTrigger className="text-md text-primary px-4 pt-4 text-center duration-300 hover:text-white">
                      Know more
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl shadow-none bg-transparent border-0">
                      <AlertDialogHeader>
                        <AlertDialogTitle asChild className="flex">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              alt="product-image"
                              src="/hero-section-background.jpeg"
                              fill
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                          <h3 className="text-white italic text-xl">
                            Photography is the art, application and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation, either electronically by
                            means of an image sensor, or chemically by means of
                            a light-sensitive material such as photographic
                            film. It is employed in many fields of science,
                            manufacturing (e.g., photolithography), and
                            business, as well as its more direct uses for art,
                            film and video production, recreational purposes,
                            hobby, and mass communication.
                          </h3>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex items-center justify-between mt-36">
          <div className="text-block">
            <span className="text-black italic">
              Do you want to see more?{" "}
              <a href="#" className="text-white">
                Follow Us
              </a>
            </span>
          </div>

          <div className="flex gap-2 social-media-icons-block">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <Instagram />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <Linkedin fill="black" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <Facebook fill="black" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
              <Twitter fill="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
