import React from "react";
const menuTextItems = ["Works", "About", "Contact"];
import Image from "next/image";
import { Button } from "./button";

export default function Header() {
  return (
    <nav className="bg-black w-full sticky top-0 z-[99999]">
      <div className="container flex justify-around items-center text-white p-4">
        <Image
          className="relative"
          src="/logo.png"
          alt="Next.js Logo"
          width={50}
          height={46}
          priority
        />
        {menuTextItems.map((textItem, index) => (
          <a
            key={textItem + index}
            href={`#${textItem.toLowerCase()}`}
            className="hover:before:scale-x-100 hover:before:origin-left text-md relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:-bottom-2"
          >
            {textItem.toUpperCase()}
          </a>
        ))}

        <Button variant="default" className="text-white">
          (+57)-1234-444-00
        </Button>
      </div>
    </nav>
  );
}
