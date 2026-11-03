import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Wrench, MessageSquare } from "lucide-react";
import { CATEGORIES, featuredProducts, PROJECTS } from "@/data/catalog";
import { CATEGORY_IMAGES, HERO_IMAGE, OFICINA_IMAGE, projectImage } from "@/data/images";
import { generalMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ProductCard, CategoryCard } from "@/components/ProductCard";
import { VehicleSelector } from "@/components/VehicleSelector";
import { SectionHeading, FitmentBanner } from "@/components/PageParts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "N4x4 And Truck Spares — Peças e acessórios 4x4 em Moçambique" },
      { name: "description", content: "Peças e acessórios para Ford Ranger e Mazda BT-50. Suspensão, acessórios 4x4, montagem e entregas para todo o país." },
      { property: "og:title", content: "N4x4 And Truck Spares — Peças e acessórios 4x4" },
      { property: "og:description", content: "Peças e acessórios para pickups Ford e Mazda, com montagem e entregas em Moçambique." },
    ],
  }),
  component: Index,
});

const BENEFITS = [
  { icon: ShieldCheck, title: "Peças de qualidade", text: "Seleção cuidada para uso exigente." },
  { icon: Truck, title: "Entregas nacionais", text: "Enviamos para todo o país." },
  { icon: Wrench, title: "Montagem", text: "Instalação na nossa área de montagem." },
  { icon: MessageSquare, title: "Apoio no WhatsApp", text: "Confirmamos a compatibilidade consigo." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={HERO_IMAGE} alt="Pickups 4x4 preparadas" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />
        <div className="container-site relative pb-36 pt-16 md:pb-44 md:pt-24">
          <p className="eyebrow">Especialistas em Ford e Mazda</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Peças e acessórios <span className="text-brand">4x4</span> para a sua pickup
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink-muted">
            Suspensão, proteção, iluminação e manutenção para Ford Ranger e Mazda BT-50 — com montagem e entregas para todo o país.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/produtos" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong">
              Ver produtos <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={generalMessage()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-ink-foreground/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-ink-foreground/10">
              <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="container-site relative z-10 -mt-24">
        <VehicleSelector />
      </div>

      <section className="container-site py-16">
        <SectionHeading eyebrow="Categorias" title="Compre por categoria" action={<Link to="/produtos" className="text-sm font-semibold text-brand hover:underline">Ver todas</Link>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} image={CATEGORY_IMAGES[c.slug] ?? HERO_IMAGE} title={c.shortName} description={c.description} href="/produtos" search={{ categoria: c.slug }} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-site">
          <SectionHeading eyebrow="Destaques" title="Produtos em destaque" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts().slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="container-site grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand"><Icon className="h-6 w-6" /></span>
            <div>
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={OFICINA_IMAGE} alt="" width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="container-site relative py-16">
          <SectionHeading eyebrow="Projetos" title="Exemplos de preparação" action={<Link to="/projetos" className="text-sm font-semibold text-brand hover:underline">Ver projetos</Link>} />
          <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <article key={p.id} className="overflow-hidden rounded-xl border border-line-ink bg-ink-2">
                <img src={projectImage(p.image)} alt={p.title} width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs text-brand">{p.vehicle} · {p.work}</p>
                  <h3 className="mt-1 font-display font-semibold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">Imagens ilustrativas — os projetos reais da empresa serão publicados em breve.</p>
        </div>
      </section>

      <FitmentBanner />
    </>
  );
}
