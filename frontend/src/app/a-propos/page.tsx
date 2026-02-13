import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Decouvrez Sloane Signature, agence d'organisation de mariages et d'evenements de luxe en France. Notre passion, notre equipe et notre savoir-faire a votre service.",
  openGraph: {
    title: "A propos | Sloane Signature",
    description:
      "Decouvrez Sloane Signature, agence d'organisation de mariages et d'evenements de luxe en France.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-[family-name:var(--font-serif)] text-center mb-8 mt-16 text-espresso">
          A propos de Sloane Signature
        </h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg leading-relaxed mb-6 text-taupe">
            Sloane Signature est une agence d&apos;organisation de mariages et
            d&apos;evenements de luxe fondee avec la conviction que chaque
            celebration merite d&apos;etre exceptionnelle. Notre agence est
            concue pour offrir a nos clients les plus exigeants un service
            personnalise, allie a la creativite et a l&apos;unicite, en fonction
            de vos preferences, de vos objectifs et de vos envies.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-taupe">
            Nous disposons d&apos;une equipe passionnee, creative et
            talentueuse a qui vous pouvez confier la conception, la planification
            et la realisation de votre celebration. Nous nous engageons a
            depasser vos attentes.
          </p>
          <p className="text-lg leading-relaxed text-taupe">
            Notre travail et la qualite de nos prestations reposent sur nos
            relations privilegiees avec des partenaires creatifs de premier plan,
            qui partagent notre passion et notre exigence de professionnalisme.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
