"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
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
  // Shuffle function to randomize image order
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const allImages = [
    "/shelf-media/01.webp",
    "/shelf-media/2.webp",
    "/shelf-media/3.webp",
    "/shelf-media/4.webp",
    "/shelf-media/5.webp",
    "/shelf-media/6.webp",
    "/shelf-media/7.webp",
    "/shelf-media/9.webp",
    "/shelf-media/10.webp",
    "/shelf-media/11.webp",
    "/shelf-media/12.webp",
    "/shelf-media/13.webp",
    "/shelf-media/14.webp",
    "/shelf-media/15.webp",
    "/shelf-media/16.webp",
    "/shelf-media/17.webp",
    "/shelf-media/18.webp",
    "/shelf-media/20.webp",
    "/shelf-media/21.webp",
  ]

  // Randomize the image order
  const images = React.useMemo(() => shuffleArray(allImages), [])

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
    "basis-[320px]",
    "basis-[480px]",
    "basis-[200px]",
    "basis-[600px]",
    "basis-[380px]",
    "basis-[420px]",
    "basis-[260px]",
    "basis-[540px]",
    "basis-[340px]",
    "basis-[460px]",
    "basis-[400px]",
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
        className="absolute left-5 top-3 text-[30px] leading-[36px] text-white"
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
                  <Image
                    src={src}
                    alt={`Image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 3}
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Carousel */}
            <div className="hidden md:block">
              <Carousel
                setApi={setApi}
                opts={{ 
                  align: "start", 
                  dragFree: true,
                  containScroll: "trimSnaps",
                  skipSnaps: false
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3" style={{ willChange: 'transform' }}>
                  {images.map((src, i) => (
                    <CarouselItem
                      key={i}
                      className={`pl-3 ${itemWidths[i % itemWidths.length]}`}
                    >
                      <div 
                        className="relative h-[322px] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ transform: 'translateZ(0)' }}
                        onClick={() => openLightbox(src, i)}
                      >
                        <Image
                          src={src}
                          alt={`Slide ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          priority={i < 4}
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
          <Image
            src={lightboxImage}
            alt="Lightbox view"
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain cursor-pointer"
            style={{ maxWidth: 'calc(100vw - 6rem)', maxHeight: 'calc(100vh - 6rem)' }}
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            priority
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
