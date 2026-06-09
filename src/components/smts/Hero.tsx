export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-accent/30">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Representante oficial Yamaha Robotics no Brasil
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            A linha SMT Yamaha completa em um só lugar
          </h1>
          <p className="mt-4 text-muted-foreground">
            Da impressão de pasta de solda ao unloader: equipamentos integrados,
            fábrica inteligente e suporte técnico em todo o Brasil. Escolha uma
            família no menu para ver o vídeo, a imagem e as especificações de cada
            máquina.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition hover:bg-[hsl(var(--green-dark))]"
            >
              Conheça os produtos
            </a>
            <a
              href="#contato"
              className="rounded-md border-2 border-primary px-5 py-2.5 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-white">
          <img
            src="/assets/img/smts-linha-completa.png"
            alt="Linha SMT Yamaha completa — todas as máquinas"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
