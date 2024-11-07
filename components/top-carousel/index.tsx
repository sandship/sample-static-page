"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function TopCarousel() {

  return (
    <Carousel plugins={[Autoplay({delay: 5000})]}>
      <CarouselContent>
        <CarouselItem className="relative h-[50vh] w-full">
          <Image src="/doctors.webp" alt="" fill style={{objectFit: "cover"}}/>
          <div className="absolute top-1/2 transform -translate-y-1/2 text-gray-200 mix-blend-screen">
            <h2 className="text-8xl font-bold">タイトル 1</h2>
            <p className="text-2xl">説明文 1</p>
          </div>
        </CarouselItem>
        <CarouselItem className="relative h-[50vh] w-full">
          <Image src="/hotate.webp" alt="" fill style={{objectFit: "cover"}}/>
          <div className="absolute top-1/2 transform -translate-y-1/2 text-gray-200 mix-blend-screen">
            <h2 className="text-8xl font-bold">タイトル 2</h2>
            <p className="text-2xl">説明文 2</p>
          </div>
        </CarouselItem>
        <CarouselItem className="relative h-[50vh] w-full">
          <Image src="/manufact.webp" alt="" fill style={{objectFit: "cover"}}/>
          <div className="absolute top-1/2 transform -translate-y-1/2 text-gray-200 mix-blend-screen">
            <h2 className="text-8xl font-bold">タイトル 3</h2>
            <p className="text-2xl">説明文 3</p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
