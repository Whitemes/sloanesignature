"use client";

import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso text-cream py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 text-center sm:text-left">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-serif)] mb-3 sm:mb-4">
              Sloane Signature
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Reconnue pour la conception et l&apos;organisation de celebrations
              de luxe inoubliables.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-3 sm:mb-4 uppercase">
              Liens rapides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?service=mariages"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Mariages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?service=experiences"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Experiences de marque
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?service=celebrations"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Celebrations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?service=cadeaux"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Cadeaux sur mesure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/70 hover:text-dusty-rose transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-3 sm:mb-4 uppercase">
              Coordonnees
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Paris, France</li>
              <li>
                <a
                  href="mailto:hello@sloanesignature.com"
                  className="hover:text-dusty-rose transition-colors duration-200"
                  aria-label="Envoyer un email a Sloane Signature"
                >
                  hello@sloanesignature.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-6 md:pt-8 text-center">
          <p className="text-cream/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Sloane Signature. Tous droits
            reserves.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-3 sm:mt-4 text-cream/70 hover:text-dusty-rose transition-colors duration-200 text-xs sm:text-sm tracking-wider"
            aria-label="Retourner en haut de la page"
            type="button"
          >
            RETOUR EN HAUT
          </button>
        </div>
      </div>
    </footer>
  );
}
