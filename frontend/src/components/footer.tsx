import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-serif)] mb-4">
              Sloane Signature
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reconnue pour la conception et l&apos;organisation de celebrations
              de luxe inoubliables.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 uppercase">
              Liens rapides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  A propos
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Mariages</span>
              </li>
              <li>
                <span className="text-gray-400">Experiences de marque</span>
              </li>
              <li>
                <span className="text-gray-400">Celebrations</span>
              </li>
              <li>
                <span className="text-gray-400">Cadeaux sur mesure</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 uppercase">
              Coordonnees
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Paris, France</li>
              <li>
                <a
                  href="mailto:hello@sloanesignature.com"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Envoyer un email a Sloane Signature"
                >
                  hello@sloanesignature.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sloane Signature. Tous droits
            reserves.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider"
            aria-label="Retourner en haut de la page"
          >
            RETOUR EN HAUT
          </a>
        </div>
      </div>
    </footer>
  );
}
