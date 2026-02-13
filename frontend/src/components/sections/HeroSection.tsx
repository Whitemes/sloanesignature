"use client";

import Link from "next/link";

function BotanicalSvgTopLeft() {
  return (
    <svg
      className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-36 md:h-36 opacity-30"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 110 Q30 80 50 60 Q70 40 90 10"
        stroke="#3C2415"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M50 60 Q40 50 20 45"
        stroke="#3C2415"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M50 60 Q55 45 48 30"
        stroke="#3C2415"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="90" cy="10" r="2.5" fill="#3C2415" />
      <circle cx="20" cy="45" r="2" fill="#3C2415" />
      <circle cx="48" cy="30" r="2" fill="#3C2415" />
      <circle cx="10" cy="110" r="2" fill="#3C2415" />
    </svg>
  );
}

function BotanicalSvgBottomRight() {
  return (
    <svg
      className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-36 md:h-36 opacity-30 rotate-180"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 110 Q30 80 50 60 Q70 40 90 10"
        stroke="#3C2415"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M50 60 Q40 50 20 45"
        stroke="#3C2415"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M50 60 Q55 45 48 30"
        stroke="#3C2415"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="90" cy="10" r="2.5" fill="#3C2415" />
      <circle cx="20" cy="45" r="2" fill="#3C2415" />
      <circle cx="48" cy="30" r="2" fill="#3C2415" />
      <circle cx="10" cy="110" r="2" fill="#3C2415" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-cream overflow-hidden">
      <BotanicalSvgTopLeft />
      <BotanicalSvgBottomRight />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="font-[family-name:var(--font-serif)] uppercase text-espresso leading-none tracking-wide">
          <span
            className="block"
            style={{ fontSize: "clamp(44px, 5.5vw, 84px)" }}
          >
            MARIAGES
          </span>
          <span
            className="block"
            style={{ fontSize: "clamp(56px, 7vw, 112px)" }}
          >
            D&apos;EXCEPTION
          </span>
          <span
            className="block"
            style={{ fontSize: "clamp(44px, 5.5vw, 84px)" }}
          >
            SUR MESURE
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-taupe font-light text-base md:text-lg leading-relaxed">
          Organisation et design sur mesure pour les couples qui recherchent
          serenite, elegance et une celebration qui leur ressemble.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#mariages"
            className="px-8 py-3 bg-espresso text-cream rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-espresso-light hover:shadow-lg hover:-translate-y-0.5"
          >
            DECOUVRIR NOS MARIAGES &rarr;
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-espresso text-espresso rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-espresso hover:text-cream"
          >
            COMMENCER A PLANIFIER
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-espresso/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-espresso/40 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
