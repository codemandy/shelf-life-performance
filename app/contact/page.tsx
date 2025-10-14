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
    <main className="relative min-h-screen w-full bg-black p-6 md:p-10 page-text-24">
      <h1 className="absolute left-6 top-6 md:left-10 md:top-10 text-2xl md:text-3xl text-white">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content">
        <h2 className="text-4xl md:text-5xl text-white mb-8 md:mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zinc-300 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4" style={{fontSize: '30px', color: 'yellow'}}>Contact Information</h3>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <p className="text-black font-medium" style={{fontSize: '30px'}}>Email</p>
                  <a href="mailto:info@shelflifeopera.com" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    info@shelflifeopera.com
                  </a>
                </div>
                <div>
                  <p className="text-black font-medium" style={{fontSize: '30px'}}>Press Inquiries</p>
                  <a href="mailto:press@shelflifeopera.com" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    press@shelflifeopera.com
                  </a>
                </div>
                <div>
                  <p className="text-black font-medium" style={{fontSize: '30px'}}>Booking</p>
                  <a href="mailto:booking@shelflifeopera.com" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    booking@shelflifeopera.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-300 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4" style={{fontSize: '30px', color: 'yellow'}}>Follow Us</h3>
              <div className="space-y-3 text-zinc-300">
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    @ Instagram
                  </a>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    f Facebook
                  </a>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:opacity-70 text-black" style={{fontSize: '30px'}}>
                    # Twitter
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-zinc-300 border-zinc-800">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-white font-semibold mb-6" style={{fontSize: '30px'}}>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black" style={{fontSize: '30px'}}>Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500" style={{fontSize: '30px'}}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black" style={{fontSize: '30px'}}>Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500" style={{fontSize: '30px'}}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-black" style={{fontSize: '30px'}}>Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-300 border-zinc-700 text-black placeholder:text-zinc-500" style={{fontSize: '30px'}}
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-black" style={{fontSize: '30px'}}>Message</Label>
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
                className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-2" style={{fontSize: '30px'}}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

