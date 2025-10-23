"use client"

import * as React from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 ">
      <h1 className="absolute left-6 top-6 md:left-10 md:top-10 text-2xl md:text-3xl text-white">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content">
        <h2 className="text-4xl md:text-5xl text-white mb-8 md:mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zinc-300 border-zinc-800 relative">
            <CardContent className="p-6 relative z-10">
              <h3 className="font-semibold mb-4 text-white" style={{fontSize: '30px'}}>Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@shelflifeopera.com" className="transition-colors hover:opacity-70 text-white">
                    info@shelflifeopera.com
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">Press Inquiries</p>
                  <a href="mailto:press@shelflifeopera.com" className="transition-colors hover:opacity-70 text-white">
                    press@shelflifeopera.com
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">Booking</p>
                  <a href="mailto:booking@shelflifeopera.com" className="transition-colors hover:opacity-70 text-white">
                    booking@shelflifeopera.com
                  </a>
                </div>
              </div>
            </CardContent>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
          </Card>
          
          {/* <Card className="bg-zinc-300 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4" style={{fontSize: '30px', color: 'red'}}>Follow Us</h3>
              <div className="space-y-3 text-zinc-300">
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black">
                    @ Instagram
                  </a>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black">
                    f Facebook
                  </a>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black">
                    # Twitter
                  </a>
                </p>
              </div>
            </CardContent>
          </Card> */}
        </div>
        
        <Card className="bg-zinc-300 border-zinc-800 relative">
          <CardContent className="p-6 md:p-8 relative z-10">
            <h3 className="text-white font-semibold mb-6" style={{fontSize: '30px'}}>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500"                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500"                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500"                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-zinc-300 border-zinc-700 text-white placeholder:text-zinc-500 resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <Button 
                type="submit" 
                className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-2"              >
                Send Message
              </Button>
            </form>
          </CardContent>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
        </Card>
      </div>
    </main>
  )
}

