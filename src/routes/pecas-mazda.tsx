import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { PageHero, FitmentBanner } from "@/components/PageParts";
import { PROJETO_BT50_IMAGE } from "@/data/images";

export const Route = createFileRoute("/pecas-mazda")({
  head: () => ({
    meta: [
      { title: "Peças Mazda BT-50 — N4x4 And Truck Spares" },
      { name: "description", content: "Peças de substituição e acessórios 4x4 para Mazda BT-50 em Moçambique." },
      { property: "og:title", content: "Peças para Mazda BT-50 — N4x4" },
      { property: "og:description", content: "Suspensão, proteção, iluminação e manutenção para Mazda BT-50." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Mazda" title="Peças para Mazda BT-50" intro="Peças de substituição e acessórios para a gama Mazda BT-50. Confirmamos a compatibilidade pelo WhatsApp." image={PROJETO_BT50_IMAGE} />
      <section className="container-site py-12"><Catalog lockBrand="Mazda" /></section>
      <FitmentBanner />
    </>
  ),
});
