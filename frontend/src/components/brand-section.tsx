import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4 uppercase">
              La Maison
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-serif)] leading-tight mb-8 text-gray-900">
              REDEFINIR L&apos;ART DE L&apos;ORGANISATION DE MARIAGES &
              D&apos;EVENEMENTS
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Avec une attention inegalee aux details et un service
                personnalise, notre travail et nos prestations s&apos;appuient
                sur notre passion, notre expertise et notre professionnalisme.
                Vous pouvez compter sur nous pour une celebration ou une
                experience de marque parfaitement orchestree, dont vos invites et
                partenaires se souviendront toute leur vie.
              </p>

              <p>
                Sloane Signature est une agence d&apos;organisation
                d&apos;evenements de luxe fondee avec la conviction que chaque
                celebration doit etre unique. Notre agence offre a nos clients
                les plus exigeants un service sur mesure, mele de creativite et
                d&apos;originalite, adapte a vos preferences, vos objectifs et
                vos envies. Notre equipe passionnee, creative et talentueuse
                saura concevoir, planifier et realiser votre celebration en
                depassant toutes vos attentes.
              </p>

              <p>
                La qualite de nos prestations repose sur nos relations
                privilegiees avec des partenaires creatifs de premier plan, qui
                partagent notre passion et notre exigence.
              </p>
            </div>

            <Button
              asChild
              className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Link href="/a-propos">EN SAVOIR PLUS</Link>
            </Button>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1712314947761-a8d718bd8c32"
                alt="Evenement de luxe organise par Sloane Signature"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
