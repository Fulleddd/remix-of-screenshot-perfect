import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/data/catalog";
import { projectImage, PROJETO_RANGER_IMAGE } from "@/data/images";
import { PageHero, FitmentBanner } from "@/components/PageParts";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — N4x4 And Truck Spares" },
      { name: "description", content: "Exemplos de preparação de pickups Ford e Mazda: suspensão, iluminação, proteção e personalização." },
      { property: "og:title", content: "Projetos de preparação 4x4 — N4x4" },
      { property: "og:description", content: "Ideias de preparação para a sua Ford Ranger ou Mazda BT-50." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Projetos" title="Projetos e preparações" intro="Exemplos ilustrativos do tipo de trabalho que fazemos. Os projetos reais da empresa serão publicados em breve." image={PROJETO_RANGER_IMAGE} />
      <section className="container-site grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.id} className="card-hover img-zoom overflow-hidden rounded-xl border border-border bg-card">
            <img src={projectImage(p.image)} alt={p.title} width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-medium text-brand">{p.vehicle} · {p.work}</p>
              <h2 className="mt-1 font-display text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
          </article>
        ))}
      </section>
      <FitmentBanner />
    </>
  ),
});
