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
  const [lightboxIndex, setLightboxIndex] = React.useState(0)

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

  const openLightbox = (imageSrc: string, imageIndex: number) => {
    setLightboxImage(imageSrc)
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    let newIndex
    if (direction === 'prev') {
      newIndex = lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1
    } else {
      newIndex = lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0
    }
    setLightboxIndex(newIndex)
    setLightboxImage(images[newIndex])
  }

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
                  onClick={() => openLightbox(src, i)}
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
                        onClick={() => openLightbox(src, i)}
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

              {/* Navigation arrows */}
              <div className="absolute -bottom-10 right-3 flex items-center gap-2">
                <button 
                  onClick={() => api?.scrollPrev()}
                  className="bg-transparent border-0 hover:bg-transparent text-white"
                >
                  ←
                </button>
                <button 
                  onClick={() => api?.scrollNext()}
                  className="bg-transparent border-0 hover:bg-transparent text-white"
                >
                  →
                </button>
              </div>

            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox - Custom overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-12"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxImage}
            alt="Lightbox view"
            className="max-w-full max-h-full object-contain cursor-pointer"
            style={{ maxWidth: 'calc(100vw - 6rem)', maxHeight: 'calc(100vh - 6rem)' }}
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
          />
          
          {/* Navigation arrows */}
          <button 
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-0 hover:bg-transparent text-white text-xl font-light hover:opacity-70 transition-opacity px-2"
          >
            ←
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-0 hover:bg-transparent text-white text-xl font-light hover:opacity-70 transition-opacity px-2"
          >
            →
          </button>
        </div>
      )}
    </main>
  )
}
