"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3C2415]/95 backdrop-blur-sm shadow-lg"
          : "bg-[#3C2415]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-8 text-[#F6F2EA] text-sm tracking-widest">
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
                  <DropdownMenuItem className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Mariages</DropdownMenuItem>
                  <DropdownMenuItem className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Experiences de marque</DropdownMenuItem>
                  <DropdownMenuItem className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Celebrations</DropdownMenuItem>
                  <DropdownMenuItem className="text-[#3C2415] focus:bg-[#C9A89A]/20 focus:text-[#3C2415]">Cadeaux sur mesure</DropdownMenuItem>
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
        </div>
      </div>
    </nav>
  );
}
