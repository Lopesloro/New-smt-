import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/nav/Sidebar";
import { MobileTopBar } from "@/components/nav/MobileTopBar";
import { MobileDrawer } from "@/components/nav/MobileDrawer";
import { Footer } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useUI } from "@/stores/ui";

export function AppLayout() {
  const setTheme = useUI((s) => s.setTheme);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  // Tema claro em todo o site (identidade de marca — sem dark)
  useEffect(() => {
    setTheme("light");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, setTheme]);

  // On Home, the nav stays hidden over the full-screen hero video and
  // slides in once the visitor scrolls past it.
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Nav is hidden only while on Home and still over the hero.
  const navHidden = isHome && !scrolled;

  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-[var(--text-0)] theme-transition">
      <Sidebar hidden={navHidden} />
      <MobileTopBar home={isHome} hidden={navHidden} />
      <MobileDrawer />
      <main className={isHome ? "" : "lg:pl-[280px]"}>
        <div className="min-h-[calc(100vh-4rem)] lg:min-h-screen">
          <Outlet />
        </div>
        {isHome ? (
          <div className="lg:pl-[280px]">
            <Footer />
          </div>
        ) : (
          <Footer />
        )}
      </main>
      <WhatsAppButton />
    </div>
  );
}
