"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 flex items-center page-text-24">
      <h1 
        className="absolute left-6 top-6 md:left-10 md:top-10 text-2xl md:text-3xl text-white"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="mx-auto max-w-4xl w-full text-white page-content">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            About Shelf-life
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              Shelf-life is an experimental opera that explores the intersection of 
              performance art, contemporary music, and visual storytelling. Through 
              innovative staging and multimedia elements, this work challenges 
              traditional operatic conventions while maintaining the emotional 
              depth and narrative power of the genre.
            </p>
            
            <p>
              The production features a unique blend of live performance, 
              digital media, and interactive elements that create an immersive 
              experience for audiences. Each performance is designed to be 
              both intimate and expansive, drawing viewers into a world where 
              sound, movement, and visual art converge.
            </p>
            
            <p>
              Created through a collaborative process involving composers, 
              performers, visual artists, and technologists, Shelf-life 
              represents a new direction in contemporary opera, pushing 
              boundaries while honoring the rich tradition of musical theater.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Creative Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-base md:text-lg">
              <div>
                <h4 className="font-medium mb-2">Composition & Direction</h4>
                <p className="text-white/80">Original concept and musical composition</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Visual Design</h4>
                <p className="text-white/80">Set design and multimedia elements</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Performance</h4>
                <p className="text-white/80">Live performers and vocalists</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technical Production</h4>
                <p className="text-white/80">Sound design and interactive technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
