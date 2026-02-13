"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
}

export function BackgroundSlideshow({
  images,
  interval = 5000,
  transitionDuration = 2,
}: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [nextImage, interval, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] as string}
            alt=""
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e08]/60 via-[#3C2415]/50 to-[#1a0e08]/70" />
    </div>
  );
}
