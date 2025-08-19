"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface Tech {
  name: string;
  logo: string;
}

interface Props {
  technologies: Tech[];
}

export default function Carousel({ technologies }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    trackRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    trackRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const duplicated = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden w-full bg-transparent">
      {/* Manual Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <Button variant="ghost" onClick={handleScrollLeft}>
          ◀
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <Button variant="ghost" onClick={handleScrollRight}>
          ▶
        </Button>
      </div>

      {/* Auto-scrolling track */}
      <div ref={trackRef} className="scroll-container flex overflow-x-hidden">
        <div className="animate-carousel flex shrink-0">
          {duplicated.map((tech, index) => (
            <div
              key={index}
              className="min-w-[120px] mx-4 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 relative mb-2">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
