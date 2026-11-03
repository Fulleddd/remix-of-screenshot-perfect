import type { ReactNode } from "react";
import { fitmentMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** Cabeçalho escuro usado no topo das páginas internas. */
export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      {image && (
        <img src={image} alt="" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-30" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="container-site relative py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title mt-2">{title}</h2>
      </div>
      {action}
    </div>
  );
}

/** Faixa escura de chamada para a montagem. */
export function FitmentBanner() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Precisa de ajuda com a montagem?</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-muted">
            Fale connosco para confirmar a peça certa e organizar a instalação na sua pickup.
          </p>
        </div>
        <a
          href={fitmentMessage()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
        >
          <WhatsAppIcon className="h-4 w-4" /> Pedir montagem
        </a>
      </div>
    </section>
  );
}
