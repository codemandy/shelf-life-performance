"use client"

import * as React from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
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
    <main className="relative min-h-screen w-full bg-white p-6 md:p-10 ">
      <h1 className="absolute left-5 top-3 text-black">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          Shelf-life an opera
        </Link>
      </h1>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl pt-24 md:pt-32 page-content">
        <div className="mb-12 space-y-4">
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

        <div>
          <h3 className="text-black mb-6">Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border border-black text-black placeholder:text-zinc-500"                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border border-black text-black placeholder:text-zinc-500"                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-black">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white border border-black text-black placeholder:text-zinc-500"                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-black">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white border border-black text-black placeholder:text-zinc-500 resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <Button
                type="submit"
                className="bg-gray-200 text-black hover:bg-gray-300 transition-colors px-8 py-2"              >
                Send Message
              </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

