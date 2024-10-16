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
    <Carousel className="mx-auto w-full max-w-6xl">
      <CarouselContent>
        {slider.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1 relative h-80 flex items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority
                className="object-cover"
              />
              <Card className="absolute bg-black/80 w-full border-none">
                <CardContent className="flex flex-col gap-5 aspect-square items-center justify-center p-6">
                  <p className="text-5xl capitalize text-white font-semibold">
                    {item.title}
                  </p>
                  <p className="text-white text-center w-1/2 text-lg">
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
