import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useUI } from "@/stores/ui";

export function MobileTopBar() {
  const openDrawer = useUI((s) => s.openDrawer);

  return (
    <header className="lg:hidden sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border-c)] bg-[var(--surface-1)] px-4">
      <Logo variant="full" className="!h-10" />
      <button
        onClick={openDrawer}
        aria-label="Open menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--brand-green)] hover:bg-[var(--surface-2)] focus-ring"
      >
        <Menu className="h-5 w-5" />
      </button>
    </header>
  );
}
