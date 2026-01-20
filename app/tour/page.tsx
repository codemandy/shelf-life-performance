"use client"

import * as React from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function TourPage() {
  const tourDates = [
    {
      date: "March 15, 2025",
      venue: "The Experimental Theater",
      city: "New York, NY",
      status: "Available",
    },
    {
      date: "March 22, 2025",
      venue: "Contemporary Arts Center",
      city: "Los Angeles, CA",
      status: "Available",
    },
    {
      date: "April 5, 2025",
      venue: "Performance Space 122",
      city: "San Francisco, CA",
      status: "Available",
    },
    {
      date: "April 12, 2025",
      venue: "The Kitchen",
      city: "Chicago, IL",
      status: "Available",
    },
  ]

  return (
    <main className="relative min-h-screen w-full bg-white p-6 md:p-10 page-text-24">
      <h1 className="absolute left-5 top-3 text-black">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content">
        <h2 className="text-black mb-8 md:mb-12">Tour Dates</h2>
        
        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <Card key={index} className="bg-white border-0 relative">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="md:col-span-1">
                    <p className="font-semibold" style={{color: 'red'}}>{show.date}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-black">{show.venue}</p>
                    <p className="text-black">{show.city}</p>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-start md:justify-end">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-black bg-zinc-300 rounded-full">
                      {show.status}
                    </span>
                  </div>
                </div>
              </CardContent>
              {/* TBA overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                <span className="text-black font-semibold">TBA</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

