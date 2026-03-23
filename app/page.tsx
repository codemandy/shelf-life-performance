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

type SlideType = 'image' | 'video';

type ImageSlide = {
  type: 'image';
  src: string;
};

type VideoSlide = {
  type: 'video';
  videoId: string;
  title?: string;
};

type CarouselSlide = ImageSlide | VideoSlide;

export default function HomePage() {
  const slides: CarouselSlide[] = [
    {
      type: 'video',
      videoId: 'tYkDRLTtavA',
      title: 'Shelf-life Opera Trailer'
    },
    { type: 'image', src: '/shelf-media/01.webp' },
    { type: 'image', src: '/shelf-media/2.webp' },
    { type: 'image', src: '/shelf-media/3.webp' },
    { type: 'image', src: '/shelf-media/4.webp' },
    { type: 'image', src: '/shelf-media/5.webp' },
    { type: 'image', src: '/shelf-media/6.webp' },
    { type: 'image', src: '/shelf-media/7.webp' },
    { type: 'image', src: '/shelf-media/9.webp' },
    { type: 'image', src: '/shelf-media/10.webp' },
    { type: 'image', src: '/shelf-media/11.webp' },
    { type: 'image', src: '/shelf-media/12.webp' },
    { type: 'image', src: '/shelf-media/13.webp' },
    { type: 'image', src: '/shelf-media/14.webp' },
    { type: 'image', src: '/shelf-media/15.webp' },
    { type: 'image', src: '/shelf-media/16.webp' },
    { type: 'image', src: '/shelf-media/17.webp' },
    { type: 'image', src: '/shelf-media/18.webp' },
    { type: 'image', src: '/shelf-media/20.webp' },
    { type: 'image', src: '/shelf-media/21.webp' },
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

  const [isHovered, setIsHovered] = React.useState(false)

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

  // Continuous smooth auto-scroll
  React.useEffect(() => {
    if (!api || isHovered) return

    const speed = 0.5 // pixels per frame (lower = slower)
    let animationId: number

    const scroll = () => {
      const engine = api.internalEngine()
      engine.scrollBody.useDuration(0)
      engine.scrollTo.distance(-speed, false)
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [api, isHovered])

  const openLightbox = (imageSrc: string, imageIndex: number) => {
    if (!isDragging) {
      const slide = slides[imageIndex];
      if (slide.type === 'image') {
        setLightboxImage(imageSrc)
        setLightboxIndex(imageIndex)
        setLightboxOpen(true)
      }
    }
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    let currentIdx = lightboxIndex;
    const findNextImageIndex = (startIdx: number, dir: 'prev' | 'next'): number => {
      let idx = startIdx;
      do {
        idx = dir === 'prev'
          ? (idx > 0 ? idx - 1 : slides.length - 1)
          : (idx < slides.length - 1 ? idx + 1 : 0);

        if (slides[idx].type === 'image') return idx;
      } while (idx !== startIdx);
      return startIdx;
    };

    const newIndex = findNextImageIndex(currentIdx, direction);
    setLightboxIndex(newIndex);
    if (slides[newIndex].type === 'image') {
      setLightboxImage(slides[newIndex].src);
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
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
              {slides.map((slide, i) => (
                <div key={i}>
                  {slide.type === 'video' ? (
                    <div className="relative w-full aspect-video overflow-hidden bg-black rounded-none">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${slide.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                        title={slide.title || 'Video'}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ border: 'none' }}
                      />
                    </div>
                  ) : (
                    <div
                      className="relative w-full aspect-[4/3] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity rounded-none"
                      onClick={() => openLightbox(slide.src, i)}
                    >
                      <Image
                        src={slide.src}
                        alt={`Image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={i < 3}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Carousel */}
            <div
              className="hidden md:block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  dragFree: true,
                  containScroll: false,
                  skipSnaps: false,
                  watchDrag: true,
                  watchResize: true,
                  watchSlides: true,
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3" style={{ willChange: 'transform' }}>
                  {slides.map((slide, i) => (
                    <CarouselItem
                      key={i}
                      className={`pl-3 ${itemWidth}`}
                    >
                      {slide.type === 'video' ? (
                        <div className="relative h-[322px] overflow-hidden bg-black rounded-none">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${slide.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                            title={slide.title || 'Video'}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{ border: 'none' }}
                          />
                        </div>
                      ) : (
                        <div
                          className="relative h-[322px] overflow-hidden bg-muted cursor-grab active:cursor-grabbing hover:opacity-90 transition-opacity rounded-none"
                          style={{ transform: 'translateZ(0)', userSelect: 'none' }}
                          onClick={() => openLightbox(slide.src, i)}
                        >
                          <Image
                            src={slide.src}
                            alt={`Slide ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            priority={i < 4}
                            draggable={false}
                          />
                        </div>
                      )}
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
    </>
  )
}
