"use client"

import * as React from "react"
import Link from "next/link"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const images = [
    "/shelf-media/2.jpg",
    "/shelf-media/3.jpg",
    "/shelf-media/4.jpg",
    "/shelf-media/5.jpg",
    "/shelf-media/6.jpg",
    "/shelf-media/7.jpg",
    "/shelf-media/9.jpg",
    "/shelf-media/10.jpg",
  ]

  // Fixed basis classes to create variable width items
  const itemWidths = [
    "basis-[280px]",
    "basis-[640px]",
    "basis-[140px]",
    "basis-[520px]",
    "basis-[360px]",
    "basis-[440px]",
    "basis-[300px]",
    "basis-[580px]",
  ]

  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxImage, setLightboxImage] = React.useState("")

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 flex items-center">
      <h1 
        className="absolute left-6 top-6 md:left-10 md:top-10 text-2xl md:text-3xl text-white"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      <Card className="mx-auto max-w-[1100px] w-full bg-black border-0 overflow-visible">
        <CardContent className="pb-12 overflow-visible">
          <div className="relative">
            {/* Mobile: Vertical image flow */}
            <div className="md:hidden flex flex-col gap-4">
              {images.map((src, i) => (
                <div 
                  key={i}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setLightboxImage(src)
                    setLightboxOpen(true)
                  }}
                >
                  <img
                    src={src}
                    alt={`Image ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Carousel */}
            <div className="hidden md:block">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", dragFree: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-3">
                  {images.map((src, i) => (
                    <CarouselItem
                      key={i}
                      className={`pl-3 ${itemWidths[i % itemWidths.length]}`}
                    >
                      <div 
                        className="relative h-[322px] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setLightboxImage(src)
                          setLightboxOpen(true)
                        }}
                      >
                        <img
                          src={src}
                          alt={`Slide ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Pagination dots */}
              <div className="pointer-events-none absolute -bottom-10 right-3 flex gap-1.5">
                {Array.from({ length: count }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === current ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox - Custom overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxImage}
            alt="Lightbox view"
            className="max-w-[120%] max-h-[120%] object-contain scale-100"
            style={{ maxWidth: '120vw', maxHeight: '120vh' }}
          />
        </div>
      )}
    </main>
  )
}
