"use client";

import { BackgroundSlideshow } from "@/components/background-slideshow";

const heroImages = [
  "https://images.unsplash.com/photo-1708569176850-9de9aa6b179b",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundSlideshow images={heroImages} interval={6000} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-[family-name:var(--font-serif)] text-6xl md:text-7xl lg:text-8xl mb-4 tracking-wider animate-fade-in">
          SLOANE SIGNATURE
        </h1>
        <p className="text-white text-xl md:text-2xl tracking-[0.3em] font-light animate-fade-in-delay">
          MARIAGES & EVENEMENTS DE LUXE
        </p>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
