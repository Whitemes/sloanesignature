"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#3C2415]/95 backdrop-blur-sm shadow-lg"
            : "bg-[#3C2415]/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between md:justify-center h-14 md:h-16">
            {/* Mobile logo */}
            <Link
              href="/"
              className="md:hidden text-[#F6F2EA] font-[family-name:var(--font-serif)] text-lg tracking-wider"
            >
              SLOANE
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center space-x-8 text-[#F6F2EA] text-sm tracking-widest">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C9A89A] transition-colors duration-200"
                >
                  ACCUEIL
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center hover:text-[#C9A89A] transition-colors duration-200 outline-none">
                    A PROPOS <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#F6F2EA] border-[#3C2415]/15">
                    <DropdownMenuItem asChild>
                      <Link href="/a-propos" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Notre histoire</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/a-propos" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Notre equipe</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center hover:text-[#C9A89A] transition-colors duration-200 outline-none">
                    NOS SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#F6F2EA] border-[#3C2415]/15">
                    <DropdownMenuItem asChild>
                      <Link href="/contact?service=mariages" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Mariages</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contact?service=experiences" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Experiences de marque</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contact?service=celebrations" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Celebrations</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contact?service=cadeaux" className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Cadeaux sur mesure</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C9A89A] transition-colors duration-200"
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden text-[#F6F2EA] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#3C2415] flex flex-col items-center justify-center gap-6">
          <button
            type="button"
            className="absolute top-4 right-4 text-[#F6F2EA] p-1"
            onClick={closeMobile}
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>

          <Link
            href="/"
            onClick={closeMobile}
            className="text-[#F6F2EA] text-lg tracking-[0.2em] hover:text-[#C9A89A] transition-colors"
          >
            ACCUEIL
          </Link>
          <Link
            href="/a-propos"
            onClick={closeMobile}
            className="text-[#F6F2EA] text-lg tracking-[0.2em] hover:text-[#C9A89A] transition-colors"
          >
            A PROPOS
          </Link>

          <div className="w-12 h-px bg-[#C9A89A]/40" />

          <p className="text-[#C9A89A] text-xs tracking-[0.3em] uppercase">Nos Services</p>
          <Link
            href="/contact?service=mariages"
            onClick={closeMobile}
            className="text-[#F6F2EA]/80 text-base tracking-wider hover:text-[#C9A89A] transition-colors"
          >
            Mariages
          </Link>
          <Link
            href="/contact?service=experiences"
            onClick={closeMobile}
            className="text-[#F6F2EA]/80 text-base tracking-wider hover:text-[#C9A89A] transition-colors"
          >
            Experiences de marque
          </Link>
          <Link
            href="/contact?service=celebrations"
            onClick={closeMobile}
            className="text-[#F6F2EA]/80 text-base tracking-wider hover:text-[#C9A89A] transition-colors"
          >
            Celebrations
          </Link>
          <Link
            href="/contact?service=cadeaux"
            onClick={closeMobile}
            className="text-[#F6F2EA]/80 text-base tracking-wider hover:text-[#C9A89A] transition-colors"
          >
            Cadeaux sur mesure
          </Link>

          <div className="w-12 h-px bg-[#C9A89A]/40" />

          <Link
            href="/contact"
            onClick={closeMobile}
            className="text-[#F6F2EA] text-lg tracking-[0.2em] hover:text-[#C9A89A] transition-colors"
          >
            CONTACT
          </Link>
        </div>
      )}
    </>
  );
}
