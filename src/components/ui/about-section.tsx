import React from "react";
import {
  Code,
  Codesandbox,
  Dribbble,
  Facebook,
  Figma,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function AboutSection() {
  return (
    <div
      className="relative
    min-h-screen pb-36  
    flex flex-col items-center justify-center
    bg-[url('/about-us-background.jpeg')] 
    bg-bottom bg-no-repeat bg-cover w-full
    after:absolute
    after:top-0
    after:left-0
    after:bg-opacity-40
    after:bg-black
    after:w-full
    after:h-full
    "
      id="about"
    >
      <div className="flex flex-col container text-white z-50 w-50">
        <h1 className="text-7xl mt-36 mb-6">ABOUT</h1>
        <h5 className="text-md italic max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          labore ad minima, minus vero at facere. Asperiores voluptatum
          voluptates commodi.
        </h5>
        <div className="flex justify-center items-center mt-24">
          <div className="w-full flex flex-col items-center">
            <div
              className="relative 
            w-[250px] h-[250px] 
            bg-bottom bg-no-repeat bg-cover 
            rounded-full 
            bg-[url('/hero-section-background.jpeg')]"
            ></div>
            <h1 className="text-2xl text-white mt-3">Jeniffer Martinez</h1>
            <h3 className="text-md text-primary italic my-3">
              Digital Development
            </h3>
            <div className="flex gap-2 social-media-icons-block text-black">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Instagram />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Linkedin fill="black" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Facebook fill="black" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div
              className="relative 
            w-[250px] h-[250px] 
            bg-bottom bg-no-repeat bg-cover 
            rounded-full 
            bg-[url('/hero-section-background.jpeg')]"
            ></div>
            <h1 className="text-2xl text-white mt-3">Juan David Rendon</h1>
            <h3 className="text-md text-primary italic my-3">
              Digital Development
            </h3>
            <div className="flex gap-2 social-media-icons-block text-black">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Instagram />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Linkedin fill="black" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <Facebook fill="black" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-36 w-full">
          <div className="text-block">
            <span className="italic">We specialized in:</span>
          </div>
          <div className="flex justify-around w-full">
            <div className="wrapper flex flex-col items-center">
              <Figma className="mb-3 text-primary" size={60} />
              <h3 className="text-md">Interactive Design</h3>
            </div>
            <div className="wrapper flex flex-col items-center">
              <Code className="mb-3 text-primary" size={60} />
              <h3 className="text-md">Code</h3>
            </div>
            <div className="wrapper flex flex-col items-center">
              <Dribbble className="mb-3 text-primary" size={60} />
              <h3 className="text-md">Illustration</h3>
            </div>
            <div className="wrapper flex flex-col items-center">
              <Codesandbox className="mb-3 text-primary" size={60} />
              <h3 className="text-md">UX/UI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
