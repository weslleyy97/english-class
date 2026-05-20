"use client";

import { TranslationProvider } from "@/components/TranslationProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <TranslationProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Method />
        <Contact />
      </main>
      <Footer />
    </TranslationProvider>
  );
}
