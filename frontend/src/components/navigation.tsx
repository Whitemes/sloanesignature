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
          ? "bg-gray-800/95 backdrop-blur-sm shadow-lg"
          : "bg-gray-800/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-8 text-white text-sm tracking-widest">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                ACCUEIL
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition-colors duration-200 outline-none">
                  A PROPOS <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem asChild>
                    <Link href="/a-propos">Notre histoire</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/a-propos">Notre equipe</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition-colors duration-200 outline-none">
                  NOS SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>Mariages</DropdownMenuItem>
                  <DropdownMenuItem>Experiences de marque</DropdownMenuItem>
                  <DropdownMenuItem>Celebrations</DropdownMenuItem>
                  <DropdownMenuItem>Cadeaux sur mesure</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors duration-200"
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
