import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FounderSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(60,36,21,0.14)] group h-[320px] sm:h-[420px] md:h-[600px]">
              <Image
                src="https://images.pexels.com/photos/34747078/pexels-photo-34747078.jpeg"
                alt="Fondatrice de Sloane Signature"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-taupe mb-3 sm:mb-4 uppercase">
              La Fondatrice
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-serif)] leading-tight mb-4 sm:mb-6 text-espresso">
              NOTRE <span className="italic">VISION</span> CREATIVE
            </h2>

            <div className="space-y-4 sm:space-y-6 text-taupe leading-relaxed text-sm md:text-base">
              <p>
                A la tete de Sloane Signature, notre fondatrice est reconnue
                comme l&apos;une des organisatrices de mariages et designeuses
                d&apos;evenements les plus recherchees. Sa vision allie elegance
                intemporelle et innovation creative.
              </p>

              <p>
                Forte d&apos;une solide experience dans l&apos;hotellerie de
                luxe, l&apos;evenementiel, les relations publiques et le
                secteur du mariage, elle a concu et produit des centaines de
                mariages, evenements d&apos;entreprise et celebrations privees
                en France et a l&apos;international. Chaque projet est une
                nouvelle occasion de creer des souvenirs inoubliables.
              </p>
            </div>

            <Button
              asChild
              className="mt-6 sm:mt-8 bg-espresso hover:bg-espresso-light text-cream px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/a-propos">EN SAVOIR PLUS</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
