import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { slider } from "./CarouselAbout.data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselAbout() {
  return (
    <Carousel className="mx-auto container max-w-6xl ">
      <CarouselContent>
        {slider.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1 relative h-80 flex items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                className="object-cover"
              />
              <Card className="absolute bg-black/80 w-full  inset-0 border-none ">
                <CardContent className="w-full h-full flex flex-col justify-center items-center  ">
                  <h2 className="text-2xl md:text-4xl capitalize text-white font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-white text-center text-xs md:text-lg">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex md:items-center md:justify-center" />
      <CarouselNext className="hidden md:flex md:items-center md:justify-center" />
    </Carousel>
  );
}
