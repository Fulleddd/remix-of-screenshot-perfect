import { createFileRoute } from "@tanstack/react-router";
import { FITMENT_SERVICES } from "@/data/catalog";
import { fitmentImage, OFICINA_IMAGE } from "@/data/images";
import { fitmentMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { PageHero } from "@/components/PageParts";

const STEPS = ["Fale connosco pelo WhatsApp", "Confirmamos a peça e a compatibilidade", "Agendamos a montagem", "Entregamos a viatura pronta"];

export const Route = createFileRoute("/montagem")({
  head: () => ({
    meta: [
      { title: "Montagem e instalação — N4x4 And Truck Spares" },
      { name: "description", content: "Instalação de suspensão, acessórios 4x4 e melhorias exteriores para pickups Ford e Mazda na Matola." },
      { property: "og:title", content: "Área de montagem — N4x4" },
      { property: "og:description", content: "Montagem profissional de peças e acessórios na sua pickup." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Montagem" title="Área de montagem" intro="Instalamos as peças e acessórios na sua pickup, em Tchumene 2, Matola." image={OFICINA_IMAGE} />
      <section className="container-site grid gap-6 py-12 sm:grid-cols-2">
        {FITMENT_SERVICES.map((s) => (
          <article key={s.title} className="card-hover overflow-hidden rounded-xl border border-border bg-card sm:flex">
            <img src={fitmentImage(s.image)} alt={s.title} width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover sm:w-48 sm:aspect-auto" />
            <div className="p-5">
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <a href={fitmentMessage(s.title)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                <WhatsAppIcon className="h-4 w-4" /> Pedir este serviço
              </a>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-ink py-14 text-ink-foreground">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold">Como funciona</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s} className="rounded-xl border border-line-ink bg-ink-2 p-5">
                <span className="font-display text-3xl font-bold text-brand">{i + 1}</span>
                <p className="mt-2 text-sm">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  ),
});
