"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative bg-cream py-24 md:py-32 px-6 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image circulaire - gauche */}
          <div
            className="relative hidden md:flex items-center justify-center transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
              transitionDelay: "200ms",
            }}
          >
            <div
              className="relative rounded-full overflow-hidden shadow-[0_18px_45px_rgba(60,36,21,0.14)]"
              style={{ width: "38vw", height: "38vw", maxWidth: "500px", maxHeight: "500px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552"
                alt="Couple elegant le jour de leur mariage"
                fill
                className="object-cover object-center"
                sizes="38vw"
              />
            </div>
          </div>

          {/* Image circulaire mobile - fond */}
          <div
            className="absolute inset-0 md:hidden flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden opacity-20">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552"
                alt=""
                fill
                className="object-cover object-center"
                sizes="320px"
              />
            </div>
          </div>

          {/* Texte - droite */}
          <div className="relative z-10">
            <h2
              className="mb-8 leading-tight transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transitionDelay: "300ms",
              }}
            >
              <span
                className="block font-[family-name:var(--font-serif)] uppercase text-espresso"
                style={{ fontSize: "clamp(44px, 5.5vw, 84px)" }}
              >
                VOTRE
              </span>
              <span
                className="block font-[family-name:var(--font-cursive)] text-dusty-rose text-5xl md:text-7xl"
              >
                Histoire
              </span>
              <span
                className="block font-[family-name:var(--font-serif)] uppercase text-espresso"
                style={{ fontSize: "clamp(44px, 5.5vw, 84px)" }}
              >
                VOUS ATTEND
              </span>
            </h2>

            <p
              className="text-taupe font-light leading-relaxed mb-8 max-w-md transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transitionDelay: "400ms",
              }}
            >
              Chaque couple a une histoire unique. Chez Sloane Signature, nous
              prenons le temps de comprendre la votre pour creer une celebration
              qui vous ressemble veritablement. De la conception au jour J, nous
              orchestrons chaque detail avec passion et precision, pour que vous
              puissiez profiter pleinement de chaque instant.
            </p>

            <div
              className="flex flex-col items-start gap-4 transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transitionDelay: "500ms",
              }}
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-espresso text-cream rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-espresso-light hover:shadow-lg hover:-translate-y-0.5"
              >
                DEMANDER UN DEVIS &rarr;
              </Link>
              <a
                href="mailto:hello@sloanesignature.com"
                className="text-taupe text-sm font-light tracking-wide hover:underline transition-all duration-200"
              >
                hello@sloanesignature.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
