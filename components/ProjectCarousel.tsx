"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export function ProjectCarousel({ images, className }: ProjectCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative group">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className={cn("relative w-full overflow-hidden rounded-2xl", className)} style={{ height: '400px' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Dots navigation */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="flex justify-center gap-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="p-1 focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-200 border border-gray-200",
                    current === index 
                      ? "bg-gray-300 border-gray-400 scale-125" 
                      : "bg-white border-gray-200 scale-100"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  )
}
