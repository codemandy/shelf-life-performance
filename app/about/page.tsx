"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-white p-6 md:p-10 ">
      <h1
        className="absolute left-5 top-3 text-black"
      >
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />

      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content text-black">
        <div className="space-y-8">
          <h2 className="font-light leading-tight text-black">
            About Shelf-life
          </h2>

          <div className="space-y-6 leading-relaxed text-black">
            <p className="text-black">
              Shelf Life: An Opera is an experimental opera that explores the absurd and often invisible infrastructures surrounding our lives. Through repetition, obsession, and satire, everyday protocols are transformed into a dreamlike landscape where memory, pattern recognition, and surveillance take center stage.
            </p>
            
            <p className="text-black">
              The piece follows characters caught in compulsive cycles: one fixated on expiration dates, another a guard navigating the edge between order and chaos. Their stories unfold in a parallel dimension—a "fourth world"—where ritualized surveillance replaces reality and infrastructure masquerades as public service.
            </p>
            
            <p className="text-black">
              Blurring the boundaries between fiction and reality, performance and institution, the work traverses the surreal, the magical, and the resistant. It is a contemporary opera infused with strong visual and performative elements that weave together art, sound, textile, poetry, and scenography.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="font-light mb-4">
              Creative Team
            </h3>
            <div className="space-y-4">
              <div>
                <p><span className="text-black">Concept:</span> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Matilda Tjäder</a><span className="text-black">, </span><a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a><span className="text-black">, </span><a href="https://www.mathiastang.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Mathias Tang</a><span className="text-black">, </span><a href="https://www.instagram.com/thibautknapp/?hl=en" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Thibaut Knapp</a></p>
              </div>
              <div>
                <p><span className="text-black">Script:</span> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Matilda Tjäder</a><span className="text-black">, </span><a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a></p>
              </div>
              <div>
                <p><span className="text-black">Composition:</span> <a href="https://matildatjader.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Matilda Tjäder</a></p>
              </div>
              <div>
                <p><span className="text-black">Dramaturgy:</span> <a href="https://www.yioupennypeng.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Penny Yiou Peng</a></p>
              </div>
              <div>
                <p><span className="text-black">Scenography, light, video, installation, graphic design:</span> <a href="https://www.mathiastang.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Mathias Tang</a></p>
              </div>
              <div>
                <p><span className="text-black">Costume:</span> <a href="https://www.instagram.com/thibautknapp/?hl=en" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Thibaut Knapp</a></p>
              </div>
              <div>
                <p><span className="text-black">Musicians:</span> <span className="text-black">Angelina Petrovic (flute)</span><span className="text-black">, </span><a href="https://www.instagram.com/runekielsgaard/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Rune Kielsgaard</a> <span className="text-black">(drums)</span><span className="text-black">, </span><a href="https://www.instagram.com/niklas_tjader/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Niklas Tjäder</a> <span className="text-black">(guitar)</span></p>
              </div>
              <div>
                <p><span className="text-black">Sound engineer:</span> <a href="https://danieltjaeder.com/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Daniel Tjäder</a></p>
              </div>
              <div>
                <p><span className="text-black">Producer:</span> <a href="https://www.scaling.day/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Scaling</a></p>
              </div>
              <div>
                <p><span className="text-black">Co-producer:</span> <a href="https://inkonst.com/en/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Inkonst</a></p>
              </div>
              <div>
                <p><span className="text-black">Residencies:</span> <a href="https://www.milvusart.se/about" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">MARC (Milvus Artistic Research Center)</a><span className="text-black">, </span><a href="https://inkonst.com/en/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Inkonst</a><span className="text-black">, </span><a href="https://www.instagram.com/countrytownvestjylland/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Country Town</a><span className="text-black"> and </span><a href="https://bkf.dk/soeg-stoette/arbejdsophold/huset-i-provence/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70 transition-opacity">Ane-Grete's Hus in Fox-Amphoux</a></p>
              </div>
              <div>
                <p><span className="text-black">Supported by:</span> <span className="text-black">Region Skåne</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
