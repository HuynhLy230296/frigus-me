import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

const menuTextItems = ["Works", "About", "Contact"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Menu Section */}
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
      {/* Hero Section */}
      <div
        className="relative
        h-screen
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
            Digital marketing strategies enhance revenue growth expectancy
            nearly 3 times over.
          </h5>
          <Button variant="outline" size="lg" className="mt-4">
            Talk with us
          </Button>
        </div>
      </div>
      {/* Work Section */}

      <div
        className="relative
        h-[80vh]
        flex flex-col items-center w-full bg-primary
        before:[clip-path:polygon(0%_0%,0%_100%,100%_100%)] 
        before:bg-primary before:-bottom-1 before:absolute before:w-full before:h-32 before:z-10"
        id="works"
      >
        <div className="flex flex-col container text-black z-50 w-50">
          <h1 className="text-7xl my-6">WORKS</h1>
          <h5 className="text-md italic max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            labore ad minima, minus vero at facere. Asperiores voluptatum
            voluptates commodi.
          </h5>
          <div className="mt-4">
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
                            className="rounded-md object-fill"
                          />
                        </AspectRatio>
                      </AlertDialogTitle>
                      <AlertDialogDescription asChild>
                        <h3 className="text-white italic text-xl">
                          Photography is the art, application and practice of
                          creating durable images by recording light or other
                          electromagnetic radiation, either electronically by
                          means of an image sensor, or chemically by means of a
                          light-sensitive material such as photographic film. It
                          is employed in many fields of science, manufacturing
                          (e.g., photolithography), and business, as well as its
                          more direct uses for art, film and video production,
                          recreational purposes, hobby, and mass communication.
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
          </div>
        </div>
      </div>
    </main>
  );
}
