import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              title="Surveillance UAV"
              desc="Long-endurance ISR platform."
            />
            <ProductCard
              title="Autonomous Nav"
              desc="Robust autonomy & collision avoidance."
            />
            <ProductCard
              title="Payload Systems"
              desc="Modular payloads for multi-mission"
            />
          </div>
        </section>
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
