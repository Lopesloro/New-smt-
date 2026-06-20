import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from "@/components/nav/Sidebar";
import { MobileTopBar } from "@/components/nav/MobileTopBar";
import { MobileDrawer } from "@/components/nav/MobileDrawer";
import { Footer } from "@/components/site/SiteFooter";
import { useUI } from "@/stores/ui";

export function AppLayout() {
  const setTheme = useUI((s) => s.setTheme);
  const location = useLocation();

  // Tema claro em todo o site (identidade de marca — sem dark)
  useEffect(() => {
    setTheme("light");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, setTheme]);

  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-[var(--text-0)] theme-transition">
      <Sidebar />
      <MobileTopBar />
      <MobileDrawer />
      <main className="lg:pl-[280px]">
        <div className="min-h-[calc(100vh-4rem)] lg:min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
