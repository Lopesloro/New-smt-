import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
}

export function Gallery({ images, alt }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-black"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src}
              alt={`${alt} — view ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={open}
            alt={alt}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
