import { useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";

interface Props {
  frames: string[];
}

export function Carousel360({ frames }: Props) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const startX = useRef<number | null>(null);
  const startIdx = useRef(0);

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.onload = () => setLoaded((c) => c + 1);
      img.src = src;
    });
  }, [frames]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startIdx.current = index;
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    const step = Math.round(dx / 8);
    const next = (startIdx.current - step) % frames.length;
    setIndex(next < 0 ? next + frames.length : next);
  };

  const onPointerUp = () => {
    startX.current = null;
  };

  const ready = loaded >= frames.length;

  return (
    <div className="relative h-full w-full select-none">
      <div
        className="h-full w-full cursor-ew-resize touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {frames[index] && (
          <img
            src={frames[index]}
            alt={`360° frame ${index + 1} of ${frames.length}`}
            draggable={false}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
          <div className="flex flex-col items-center gap-3">
            <RotateCw className="h-6 w-6 animate-spin text-[var(--brand-lime)]" />
            <span className="font-mono-tech text-xs uppercase tracking-widest">
              Loading frames {loaded}/{frames.length}
            </span>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 font-mono-tech text-xs uppercase tracking-widest text-white">
        <RotateCw className="mr-2 inline h-3 w-3" />
        Drag to rotate
      </div>
    </div>
  );
}
