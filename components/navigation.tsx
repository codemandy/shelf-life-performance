"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: "/about", label: "About" },
    { href: "/tour", label: "Tour" },
    { href: "/contact", label: "Contact" },
  ]
  
  return (
    <nav className="absolute right-6 top-6 md:right-10 md:top-10 z-10">
      <ul className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={`text-white text-xl md:text-2xl transition-opacity hover:opacity-70 ${
                pathname === link.href ? "underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

