import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-12 w-full">
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
      <h3 className="text-white mt-5">© IWTHEMES.| Privacy Policy</h3>
    </footer>
  );
}
