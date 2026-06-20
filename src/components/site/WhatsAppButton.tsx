import { MessageCircle } from "lucide-react";
import { smts } from "@/data/company";

export function WhatsAppButton() {
  const href = `https://wa.me/${smts.whatsapp}?text=${encodeURIComponent(
    "Hello SMTS, I'd like more information about your equipment.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-ring"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
