import { Header } from "@/components/smts/Header";
import { Hero } from "@/components/smts/Hero";
import { Catalog } from "@/components/smts/Catalog";
import { Footer } from "@/components/smts/Footer";
import { AssistantWidget } from "@/components/site/AssistantWidget";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Catalog />
      </main>
      <Footer />
      <AssistantWidget />
    </div>
  );
}

export default App;
