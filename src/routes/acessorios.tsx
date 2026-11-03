import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { PageHero, FitmentBanner } from "@/components/PageParts";
import { PRODUCT_IMAGES } from "@/data/images";
import type { CategorySlug } from "@/data/catalog";

const CATS: CategorySlug[] = ["acessorios-4x4", "acessorios-exteriores", "acessorios-interiores", "desempenho"];

export const Route = createFileRoute("/acessorios")({
  head: () => ({
    meta: [
      { title: "Acessórios 4x4 — N4x4 And Truck Spares" },
      { name: "description", content: "Guinchos, iluminação LED, para-choques, snorkels e acessórios interiores para pickups." },
      { property: "og:title", content: "Acessórios 4x4 — N4x4" },
      { property: "og:description", content: "Equipe a sua pickup para trabalho e aventura." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Acessórios" title="Acessórios 4x4" intro="Equipamento para trabalho e aventura: recuperação, iluminação, proteção exterior e conforto interior." image={PRODUCT_IMAGES.guincho} />
      <section className="container-site py-12"><Catalog categories={CATS} /></section>
      <FitmentBanner />
    </>
  ),
});
