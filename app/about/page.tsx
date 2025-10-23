"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 ">
      <h1 
        className="absolute left-5 top-3 text-[30px] leading-[36px] text-white"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content text-white">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white">
            About Shelf-life
          </h2>
          
          <div className="space-y-6 leading-relaxed text-white">
            <p className="text-white">
              Shelf Life: An Opera is an experimental opera that explores the absurd and often invisible infrastructures surrounding our lives. Through repetition, obsession, and satire, everyday protocols are transformed into a dreamlike landscape where memory, pattern recognition, and surveillance take center stage.
            </p>
            
            <p className="text-white">
              The piece follows characters caught in compulsive cycles: one fixated on expiration dates, another a guard navigating the edge between order and chaos. Their stories unfold in a parallel dimension—a "fourth world"—where ritualized surveillance replaces reality and infrastructure masquerades as public service.
            </p>
            
            <p className="text-white">
              Blurring the boundaries between fiction and reality, performance and institution, the work traverses the surreal, the magical, and the resistant. It is a contemporary opera infused with strong visual and performative elements that weave together art, sound, textile, poetry, and scenography.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Creative Team
            </h3>
            <div className="space-y-4">
              <div>
                <p><strong className="text-white">Concept:</strong> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Matilda Tjäder</a><span className="text-white">, </span><a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a><span className="text-white">, </span><a href="https://www.mathiastang.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Mathias Tang</a><span className="text-white">, </span><a href="https://www.instagram.com/thibautknapp/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Thibaut Knapp</a></p>
              </div>
              <div>
                <p><strong className="text-white">Script:</strong> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Matilda Tjäder</a><span className="text-white">, </span><a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a></p>
              </div>
              <div>
                <p><strong className="text-white">Composition:</strong> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Matilda Tjäder</a></p>
              </div>
              <div>
                <p><strong className="text-white">Dramaturgy:</strong> <a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a></p>
              </div>
              <div>
                <p><strong className="text-white">Scenography, light, video, installation, graphic design:</strong> <a href="https://www.mathiastang.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Mathias Tang</a></p>
              </div>
              <div>
                <p><strong className="text-white">Costume:</strong> <a href="https://www.instagram.com/thibautknapp/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Thibaut Knapp</a></p>
              </div>
              <div>
                <p><strong className="text-white">Musicians:</strong> <span className="text-white">Angelina Petrovic (flute)</span><span className="text-white">, </span><a href="https://www.instagram.com/runekielsgaard/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Rune Kielsgaard</a> <span className="text-white">(drums)</span><span className="text-white">, </span><a href="https://www.instagram.com/niklas_tjader/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Niklas Tjäder</a> <span className="text-white">(guitar)</span></p>
              </div>
              <div>
                <p><strong className="text-white">Sound engineer:</strong> <a href="https://danieltjaeder.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Daniel Tjäder</a></p>
              </div>
              <div>
                <p><strong className="text-white">Producer:</strong> <a href="https://www.scaling.day/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Scaling</a></p>
              </div>
              <div>
                <p><strong className="text-white">Co-producer:</strong> <a href="https://inkonst.com/en/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Inkonst</a></p>
              </div>
              <div>
                <p><strong className="text-white">Residencies:</strong> <a href="https://www.milvusart.se/about" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">MARC (Milvus Artistic Research Center)</a><span className="text-white">, </span><a href="https://inkonst.com/en/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Inkonst</a><span className="text-white">, </span><a href="https://www.instagram.com/countrytownvestjylland/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Country Town</a><span className="text-white"> and </span><a href="https://bkf.dk/soeg-stoette/arbejdsophold/huset-i-provence/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-70 transition-opacity">Ane-Grete's Hus in Fox-Amphoux</a></p>
              </div>
              <div>
                <p><strong className="text-white">Supported by:</strong> <span className="text-white">Region Skåne</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
