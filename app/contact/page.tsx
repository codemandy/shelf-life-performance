import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-white p-6 md:p-10 ">
      <h1 className="absolute left-5 top-3 text-black">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content">
        <div className="space-y-4">
          <h3 className="text-black mb-4">Contact</h3>
          <div>
            <p className="text-black">Press / Bookings</p>
            <div className="space-y-1">
              <a href="mailto:jared@aliceagency.co" className="transition-colors hover:opacity-70 text-black block">
                jared@aliceagency.co
              </a>
              <a href="mailto:sara@aliceagency.co" className="transition-colors hover:opacity-70 text-black block">
                sara@aliceagency.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

