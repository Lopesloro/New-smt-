import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useUI } from "@/stores/ui";
import { cn } from "@/lib/utils";

interface MobileTopBarProps {
  /** on Home the bar floats (fixed) over the hero so the video stays full-screen */
  home?: boolean;
  /** when true (Home, still over the hero) the bar slides up out of view */
  hidden?: boolean;
}

export function MobileTopBar({ home = false, hidden = false }: MobileTopBarProps) {
  const openDrawer = useUI((s) => s.openDrawer);

  return (
    <header
      className={cn(
        "lg:hidden top-0 left-0 right-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border-c)] bg-[var(--surface-1)] px-4",
        home ? "fixed transition-transform duration-300 ease-smt-out" : "sticky",
        home && hidden && "-translate-y-full",
      )}
    >
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
