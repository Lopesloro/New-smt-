import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navItems, isNavGroup } from "@/data/nav";
import { useUI } from "@/stores/ui";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const expanded = useUI((s) => s.expanded);
  const toggleExpanded = useUI((s) => s.toggleExpanded);
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 z-30 h-screen w-[280px] flex-col border-r border-[var(--border-c)] bg-[var(--surface-1)]"
      aria-label="Primary navigation"
    >
      {/* Brand */}
      <div className="px-6 pt-7 pb-6 border-b border-[var(--border-c)]">
        <Logo variant="full" />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <ul className="space-y-1">
          {navItems.map((item) => {
            if (isNavGroup(item)) {
              const isOpen = !!expanded[item.key];
              const hasActiveChild = item.children.some((c) =>
                location.pathname.startsWith(c.to),
              );
              return (
                <li key={item.key}>
                  <button
                    onClick={() => toggleExpanded(item.key)}
                    aria-expanded={isOpen}
                    className={cn(
                      "group flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                      hasActiveChild
                        ? "text-[var(--brand-green)]"
                        : "text-[var(--text-1)] hover:bg-[var(--surface-2)] hover:text-[var(--brand-green)]",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200 ease-smt-out",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen && (
                    <ul className="mt-1 ml-3 space-y-0.5 border-l border-[var(--border-c)] pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className={navLinkClass}>
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
                <NavLink to={item.to} end={item.to === "/"} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer of sidebar */}
      <div className="border-t border-[var(--border-c)] px-6 py-5">
        <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-2)]">
          Language
        </div>
        <div className="mt-1 text-sm font-medium text-[var(--text-1)]">EN</div>
        <div className="mt-4 text-[11px] leading-relaxed text-[var(--text-2)]">
          © {new Date().getFullYear()} SMT Solutions<br />
          Campinas-SP · Brazil
        </div>
      </div>
    </aside>
  );
}

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "block rounded-md px-4 py-2 text-sm font-medium transition-colors relative",
    isActive
      ? "bg-[var(--accent-soft,rgba(152,215,20,0.16))] text-[var(--brand-green)] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-[3px] before:rounded-r before:bg-[var(--brand-lime)]"
      : "text-[var(--text-1)] hover:bg-[var(--surface-2)] hover:text-[var(--brand-green)]",
  );
}
