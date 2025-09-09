"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroBackground.jpeg" // make sure this image is in /public folder
          alt="Luxury marble kitchen countertop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm">Premium Quality Since 1985</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            World-Class{" "}
            <span className="text-yellow-400">Marble</span> &{" "}
            <span className="text-yellow-400">Granite</span>
            <br />
            for Global Projects
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transform your spaces with our premium natural stones. From luxury
            residences to commercial landmarks, we deliver excellence across
            40+ countries worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition text-lg">
              Explore Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-lg">
              Request Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl mb-2">40+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl mb-2">5000+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl mb-2">35</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
