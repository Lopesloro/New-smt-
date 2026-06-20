import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppLayout } from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Catalog from "@/pages/Catalog";
import CategoryLanding from "@/pages/CategoryLanding";
import MachineDetail from "@/pages/MachineDetail";
import Showroom from "@/pages/Showroom";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:category" element={<CategoryLanding />} />
            <Route path="catalog/:category/:slug" element={<MachineDetail />} />
            <Route path="showroom" element={<Showroom />} />
            <Route path="resources" element={<Resources />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
