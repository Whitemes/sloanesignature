import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sloane Signature pour organiser votre mariage ou evenement de luxe en France. Discutons ensemble de votre projet.",
  openGraph: {
    title: "Contact | Sloane Signature",
    description:
      "Contactez Sloane Signature pour organiser votre mariage ou evenement de luxe en France.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-[family-name:var(--font-serif)] text-center mb-4 text-espresso">
          Contactez-nous
        </h1>
        <p className="text-center text-taupe mb-12 text-lg">
          Creons ensemble quelque chose d&apos;extraordinaire
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
