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
  const images = [
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

  // Fixed width for all carousel items
  const itemWidth = "basis-[600px]"

  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxImage, setLightboxImage] = React.useState("")
  const [lightboxIndex, setLightboxIndex] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    const onPointerDown = () => {
      console.log('Pointer down detected')
      setIsDragging(false)
    }
    const onDrag = () => {
      console.log('Drag detected')
      setIsDragging(true)
    }

    api.on("select", onSelect)
    api.on("pointerDown", onPointerDown)
    api.on("scroll", onDrag)
    onSelect()

    return () => {
      api.off("select", onSelect)
      api.off("pointerDown", onPointerDown)
      api.off("scroll", onDrag)
    }
  }, [api])

  const openLightbox = (imageSrc: string, imageIndex: number) => {
    if (!isDragging) {
      setLightboxImage(imageSrc)
      setLightboxIndex(imageIndex)
      setLightboxOpen(true)
    }
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
    <main className="relative min-h-screen w-full bg-white p-6 md:p-10 flex items-center">
      <h1
        className="absolute left-5 top-3 text-black"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      <Card className="mx-auto max-w-[1100px] w-full bg-white border-0 overflow-visible rounded-none">
        <CardContent className="pb-12 overflow-visible">
          <div className="relative">
            {/* Mobile: Vertical image flow */}
            <div className="md:hidden flex flex-col gap-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity rounded-none"
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
                  skipSnaps: false,
                  watchDrag: true,
                  watchResize: true,
                  watchSlides: true
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3" style={{ willChange: 'transform' }}>
                  {images.map((src, i) => (
                    <CarouselItem
                      key={i}
                      className={`pl-3 ${itemWidth}`}
                    >
                      <div
                        className="relative h-[322px] overflow-hidden bg-muted cursor-grab active:cursor-grabbing hover:opacity-90 transition-opacity rounded-none"
                        style={{ transform: 'translateZ(0)', userSelect: 'none' }}
                        onClick={() => openLightbox(src, i)}
                      >
                        <Image
                          src={src}
                          alt={`Slide ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          priority={i < 4}
                          draggable={false}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
          {/* Previous arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}
            className="absolute left-8 text-white text-2xl hover:opacity-70 transition-opacity"
            aria-label="Previous image"
          >
            ←
          </button>

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

          {/* Next arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            className="absolute right-8 text-white text-2xl hover:opacity-70 transition-opacity"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  )
}
