"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type PropertyGalleryProps = {
  images: string[];
  title: string;
  className?: string;
  sizes?: string;
};

const emblaOptions = { loop: true };

export function PropertyGallery({
  images,
  title,
  className,
  sizes = "(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw",
}: PropertyGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className={`group relative aspect-[4/3] overflow-hidden bg-surface-container-low ${
        className ?? ""
      }`}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              className="relative h-full min-w-0 flex-[0_0_100%]"
              key={`${image}-${index}`}
            >
              <Image
                src={image}
                alt={index === 0 ? title : `${title} photo ${index + 1}`}
                fill
                sizes={sizes}
                priority={index === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label={`Previous photo for ${title}`}
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center border border-white/60 bg-ink/45 text-white opacity-0 backdrop-blur transition-all duration-300 hover:border-brand-yellow hover:bg-ink md:grid md:group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={`Next photo for ${title}`}
            onClick={scrollNext}
            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center border border-white/60 bg-ink/45 text-white opacity-0 backdrop-blur transition-all duration-300 hover:border-brand-yellow hover:bg-ink md:grid md:group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-ink/35 px-2.5 py-2 backdrop-blur"
            aria-label={`${title} photos`}
          >
            {images.map((image, index) => (
              <button
                key={`${image}-dot-${index}`}
                type="button"
                aria-label={`Show photo ${index + 1} for ${title}`}
                aria-current={selectedIndex === index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full border border-white/80 transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-5 border-brand-yellow bg-brand-yellow"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
