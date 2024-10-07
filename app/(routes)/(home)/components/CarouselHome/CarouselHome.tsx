import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Banner } from "./CarouselHome.data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CarouselHome() {
  return (
    <Carousel className="mx-auto w-full max-w-6xl">
      <CarouselContent>
        {Banner.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 relative h-72 flex items-center justify-center rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                fill
                priority
                className="object-cover"
              />
              <Card className="absolute bg-black/40 w-full border-none ">
                <CardContent className="flex flex-col gap-5 aspect-square items-center justify-center p-6">
                  <span className="text-3xl text-center text-white font-semibold">
                    {item.label}
                  </span>
                  <Link href={`/contacto`}>
                    <Button>Contáctenos</Button>
                  </Link>
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
