import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navItems, isNavGroup } from "@/data/nav";
import { useUI } from "@/stores/ui";
import { cn } from "@/lib/utils";

export function MobileDrawer() {
  const open = useUI((s) => s.drawerOpen);
  const close = useUI((s) => s.closeDrawer);
  const expanded = useUI((s) => s.expanded);
  const toggleExpanded = useUI((s) => s.toggleExpanded);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    close();
  }, [location.pathname, close]);

  // Close on ESC + lock scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
        aria-hidden
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-[rgba(10,14,12,0.5)] transition-opacity duration-300 ease-smt-out",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      {/* Drawer */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          "lg:hidden fixed left-0 top-0 z-50 h-screen w-[85%] max-w-[340px] flex flex-col bg-[var(--surface-1)] border-r border-[var(--border-c)] transform transition-transform duration-300 ease-smt-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-c)] px-5 py-4">
          <Logo variant="full" />
          <button
            onClick={close}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--brand-green)] hover:bg-[var(--surface-2)] focus-ring"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => {
              if (isNavGroup(item)) {
                const isOpen = !!expanded[item.key];
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => toggleExpanded(item.key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-[var(--text-1)] hover:bg-[var(--surface-2)]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {isOpen && (
                      <ul className="ml-3 mt-1 space-y-0.5 border-l border-[var(--border-c)] pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to} className={drawerLinkClass}>
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"} className={drawerLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-[var(--border-c)] px-5 py-4 text-[11px] leading-relaxed text-[var(--text-2)]">
          © {new Date().getFullYear()} SMT Solutions · Campinas-SP
        </div>
      </aside>
    </>
  );
}

function drawerLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "block rounded-md px-4 py-3 text-sm font-medium",
    isActive
      ? "bg-[rgba(152,215,20,0.16)] text-[var(--brand-green)]"
      : "text-[var(--text-1)] hover:bg-[var(--surface-2)]",
  );
}
