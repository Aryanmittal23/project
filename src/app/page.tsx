"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import {Portfolio} from "@/components/Portfolio";

export default function Home() {
  return (  
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
