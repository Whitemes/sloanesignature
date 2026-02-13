"use client";

import Link from "next/link";
import { BackgroundSlideshow } from "@/components/background-slideshow";

const heroImages = [
  "https://images.unsplash.com/photo-1708569176850-9de9aa6b179b",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
];

function BotanicalSvgTopLeft() {
  return (
    <svg
      className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-36 md:h-36 opacity-20"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 110 Q30 80 50 60 Q70 40 90 10"
        stroke="#F6F2EA"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M50 60 Q40 50 20 45"
        stroke="#F6F2EA"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M50 60 Q55 45 48 30"
        stroke="#F6F2EA"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="90" cy="10" r="2.5" fill="#F6F2EA" />
      <circle cx="20" cy="45" r="2" fill="#F6F2EA" />
      <circle cx="48" cy="30" r="2" fill="#F6F2EA" />
      <circle cx="10" cy="110" r="2" fill="#F6F2EA" />
    </svg>
  );
}

function BotanicalSvgBottomRight() {
  return (
    <svg
      className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-36 md:h-36 opacity-20 rotate-180"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 110 Q30 80 50 60 Q70 40 90 10"
        stroke="#F6F2EA"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M50 60 Q40 50 20 45"
        stroke="#F6F2EA"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M50 60 Q55 45 48 30"
        stroke="#F6F2EA"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="90" cy="10" r="2.5" fill="#F6F2EA" />
      <circle cx="20" cy="45" r="2" fill="#F6F2EA" />
      <circle cx="48" cy="30" r="2" fill="#F6F2EA" />
      <circle cx="10" cy="110" r="2" fill="#F6F2EA" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundSlideshow images={heroImages} interval={6000} />

      <BotanicalSvgTopLeft />
      <BotanicalSvgBottomRight />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-[family-name:var(--font-serif)] text-cream leading-none tracking-wider animate-fade-in">
          <span
            className="block"
            style={{ fontSize: "clamp(48px, 7vw, 120px)" }}
          >
            SLOANE SIGNATURE
          </span>
        </h1>

        <div className="mt-4 mb-2 w-16 h-px bg-dusty-rose/60 animate-fade-in-delay" />

        <p
          className="text-cream/90 tracking-[0.3em] font-light uppercase animate-fade-in-delay"
          style={{ fontSize: "clamp(14px, 2vw, 24px)" }}
        >
          MARIAGES D&apos;EXCEPTION SUR MESURE
        </p>

        <p className="mt-6 max-w-lg text-cream/70 font-light text-sm md:text-base leading-relaxed animate-fade-in-delay">
          Organisation et design sur mesure pour les couples qui recherchent
          serenite, elegance et une celebration qui leur ressemble.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-delay">
          <Link
            href="#story"
            className="px-8 py-3 bg-cream/15 backdrop-blur-sm text-cream border border-cream/30 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-cream hover:text-espresso hover:shadow-lg hover:-translate-y-0.5"
          >
            DECOUVRIR NOS MARIAGES &rarr;
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-cream/40 text-cream rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-cream hover:text-espresso"
          >
            COMMENCER A PLANIFIER
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cream/40 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
