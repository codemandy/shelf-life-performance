"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 ">
      <h1 
        className="absolute left-6 top-6 md:left-10 md:top-10 text-2xl md:text-3xl text-white"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content text-white">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            About Shelf-life
          </h2>
          
          <div className="space-y-6 leading-relaxed">
            <p>
              Shelf Life: An Opera is an experimental opera that explores the absurd and often invisible infrastructures surrounding our lives. Through repetition, obsession, and satire, everyday protocols are transformed into a dreamlike landscape where memory, pattern recognition, and surveillance take center stage.
            </p>
            
            <p>
              The piece follows characters caught in compulsive cycles: one fixated on expiration dates, another a guard navigating the edge between order and chaos. Their stories unfold in a parallel dimension—a "fourth world"—where ritualized surveillance replaces reality and infrastructure masquerades as public service.
            </p>
            
            <p>
              Blurring the boundaries between fiction and reality, performance and institution, the work traverses the surreal, the magical, and the resistant. It is a contemporary opera infused with strong visual and performative elements that weave together art, sound, textile, poetry, and scenography.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Creative Team
            </h3>
            <div className="space-y-4">
              <div>
                <p><strong className="text-white">Concept:</strong> Matilda Tjäder, Penny Yiou Peng, Mathias Tang, Thibaut Knapp</p>
              </div>
              <div>
                <p><strong className="text-white">Script:</strong> Matilda Tjäder, Penny Yiou Peng</p>
              </div>
              <div>
                <p><strong className="text-white">Composition:</strong> Matilda Tjäder</p>
              </div>
              <div>
                <p><strong className="text-white">Dramaturgy:</strong> Penny Yiou Peng</p>
              </div>
              <div>
                <p><strong className="text-white">Scenography, light, video, installation, graphic design:</strong> Mathias Tang</p>
              </div>
              <div>
                <p><strong className="text-white">Costume:</strong> Thibaut Knapp</p>
              </div>
              <div>
                <p><strong className="text-white">Musicians:</strong> Angelina Petrovic (flute), Rune Kielsgaard (drums), Niklas Tjäder (guitar)</p>
              </div>
              <div>
                <p><strong className="text-white">Sound engineer:</strong> Daniel Tjäder</p>
              </div>
              <div>
                <p><strong className="text-white">Producer:</strong> Scaling</p>
              </div>
              <div>
                <p><strong className="text-white">Co-producer:</strong> Inkonst</p>
              </div>
              <div>
                <p><strong className="text-white">Residencies:</strong> MARC (Milvus Artistic Research Center), Inkonst, Country Town and Ane-Grete's Hus in Fox-Amphoux</p>
              </div>
              <div>
                <p><strong className="text-white">Supported by:</strong> Region Skåne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
