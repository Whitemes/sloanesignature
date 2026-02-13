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
      className="absolute top-6 left-6 md:top-16 md:left-16 w-20 h-20 md:w-36 md:h-36 opacity-15"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 110 Q30 80 50 60 Q70 40 90 10" stroke="#F6F2EA" strokeWidth="1" fill="none" />
      <path d="M50 60 Q40 50 20 45" stroke="#F6F2EA" strokeWidth="0.8" fill="none" />
      <path d="M50 60 Q55 45 48 30" stroke="#F6F2EA" strokeWidth="0.8" fill="none" />
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
      className="absolute bottom-6 right-6 md:bottom-16 md:right-16 w-20 h-20 md:w-36 md:h-36 opacity-15 rotate-180"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 110 Q30 80 50 60 Q70 40 90 10" stroke="#F6F2EA" strokeWidth="1" fill="none" />
      <path d="M50 60 Q40 50 20 45" stroke="#F6F2EA" strokeWidth="0.8" fill="none" />
      <path d="M50 60 Q55 45 48 30" stroke="#F6F2EA" strokeWidth="0.8" fill="none" />
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h1
          className="font-[family-name:var(--font-serif)] text-white leading-[0.9] tracking-wider animate-fade-in drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          style={{ fontSize: "clamp(36px, 7vw, 110px)" }}
        >
          SLOANE SIGNATURE
        </h1>

        <div className="mt-3 md:mt-5 mb-3 md:mb-4 w-12 md:w-16 h-px bg-[#C9A89A] animate-fade-in-delay" />

        <p
          className="text-white/90 tracking-[0.2em] md:tracking-[0.3em] font-light uppercase animate-fade-in-delay drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
          style={{ fontSize: "clamp(11px, 1.8vw, 22px)" }}
        >
          MARIAGES D&apos;EXCEPTION SUR MESURE
        </p>

        <p className="mt-4 md:mt-6 max-w-md lg:max-w-lg text-white/70 font-light text-xs md:text-sm lg:text-base leading-relaxed animate-fade-in-delay px-4">
          Organisation et design sur mesure pour les couples qui recherchent
          serenite, elegance et une celebration qui leur ressemble.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-fade-in-delay">
          <Link
            href="#story"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#3C2415] rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-[#C9A89A] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
          >
            DECOUVRIR NOS MARIAGES &rarr;
          </Link>
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white/60 text-white rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#3C2415]"
          >
            NOUS CONTACTER
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
