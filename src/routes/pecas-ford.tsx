import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { PageHero, FitmentBanner } from "@/components/PageParts";
import { PROJETO_RANGER_IMAGE } from "@/data/images";

export const Route = createFileRoute("/pecas-ford")({
  head: () => ({
    meta: [
      { title: "Peças Ford Ranger — N4x4 And Truck Spares" },
      { name: "description", content: "Peças de substituição e acessórios 4x4 para Ford Ranger em Moçambique." },
      { property: "og:title", content: "Peças para Ford Ranger — N4x4" },
      { property: "og:description", content: "Suspensão, proteção, iluminação e manutenção para Ford Ranger." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Ford" title="Peças para Ford Ranger" intro="Peças de substituição e acessórios para a gama Ford Ranger. Confirmamos a compatibilidade pelo WhatsApp." image={PROJETO_RANGER_IMAGE} />
      <section className="container-site py-12"><Catalog lockBrand="Ford" /></section>
      <FitmentBanner />
    </>
  ),
});
