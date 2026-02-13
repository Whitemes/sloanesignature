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
    <div className="fixed inset-0 w-full h-screen -z-10">
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

      {/* Overlay marron fonce pour la lisibilite */}
      <div className="absolute inset-0 bg-[#3C2415]/40" />
    </div>
  );
}
