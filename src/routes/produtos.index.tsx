import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { PageHero, FitmentBanner } from "@/components/PageParts";
import { HERO_IMAGE } from "@/data/images";

export const Route = createFileRoute("/produtos/")({
  validateSearch: (s: Record<string, unknown>): { q?: string | undefined; categoria?: string | undefined } => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    categoria: typeof s["categoria"] === "string" ? s["categoria"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Produtos — N4x4 And Truck Spares" },
      { name: "description", content: "Catálogo de peças e acessórios para Ford Ranger e Mazda BT-50, com pesquisa e filtros." },
      { property: "og:title", content: "Catálogo de produtos — N4x4 And Truck Spares" },
      { property: "og:description", content: "Pesquise peças e acessórios 4x4 para pickups Ford e Mazda." },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const { q, categoria } = Route.useSearch();
  return (
    <>
      <PageHero eyebrow="Catálogo" title="Peças e acessórios" intro="Pesquise por nome, referência ou modelo. Preços e disponibilidade sob consulta pelo WhatsApp." image={HERO_IMAGE} />
      <section className="container-site py-12">
        <Catalog key={`${q ?? ""}|${categoria ?? ""}`} initialQuery={q ?? ""} initialCategory={categoria ?? ""} />
      </section>
      <FitmentBanner />
    </>
  );
}
