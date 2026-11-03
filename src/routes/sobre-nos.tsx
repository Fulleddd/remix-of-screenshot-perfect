import { createFileRoute } from "@tanstack/react-router";
import { OFICINA_IMAGE } from "@/data/images";
import { PageHero, FitmentBanner } from "@/components/PageParts";

const VALUES = [
  { title: "Especialização", text: "Foco em pickups Ford Ranger e Mazda BT-50." },
  { title: "Honestidade", text: "Confirmamos a compatibilidade antes de qualquer venda." },
  { title: "Apoio próximo", text: "Atendimento direto pelo WhatsApp." },
];

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre nós — N4x4 And Truck Spares" },
      { name: "description", content: "N4x4 And Truck Spares: peças, acessórios e montagem para pickups Ford e Mazda em Tchumene 2, Matola." },
      { property: "og:title", content: "Sobre a N4x4 And Truck Spares" },
      { property: "og:description", content: "Especialistas em peças e acessórios para pickups Ford e Mazda em Moçambique." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Sobre nós" title="N4x4 And Truck Spares" intro="Peças, acessórios e montagem para pickups Ford e Mazda, a partir de Tchumene 2, Matola, com entregas para todo o país." image={OFICINA_IMAGE} />
      <section className="container-site grid gap-6 py-14 md:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </section>
      <FitmentBanner />
    </>
  ),
});
