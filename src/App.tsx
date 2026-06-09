import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Featured } from "@/components/site/Featured";
import { Showroom } from "@/components/site/Showroom";
import { YamahaShowroom } from "@/components/site/YamahaShowroom";
import { Features } from "@/components/site/Features";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { AssistantWidget } from "@/components/site/AssistantWidget";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Showroom />
        <YamahaShowroom />
        <Features />
        <Contact />
      </main>
      <Footer />
      <AssistantWidget />
    </div>
  );
}

export default App;
