"use client";

import Image from "next/image";
import { Menu, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/marmilixLogo.png" 
              alt="Marmilix" 
              width={180}
              height={180}
              className="h-36 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 border rounded-lg hover:bg-muted">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
