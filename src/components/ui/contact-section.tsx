import React from "react";
import { MapPin, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <div
      className="relative
        flex flex-col items-center w-full bg-primary pb-36
        before:[clip-path:polygon(0%_0%,0%_100%,100%_100%)] 
        before:bg-primary before:-top-32 before:absolute before:w-full before:h-32 before:z-10"
      id="contact"
    >
      <div className="flex flex-col container text-black z-50 w-50 text-center">
        <h1 className="text-7xl my-6">CONTACT</h1>
        <h5 className="text-md italic my-10">
          We’re always looking for new projects to work on, <br />
          if you have some please write us!
        </h5>

        <h3 className="text-5xl italic">support@iwthemes.com</h3>

        <div className="flex justify-center items-center mt-24">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <MessageSquare size={60} />
              <h1 className="text-2xl text-black mt-3 italic">
                (+57)-1234-444-00
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <MapPin size={60} />
            <h1 className="text-2xl text-black mt-3 italic">
              We are from Vietnam
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
