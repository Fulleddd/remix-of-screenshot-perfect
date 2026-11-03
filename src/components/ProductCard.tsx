import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { AVAILABILITY_LABEL, getCategory } from "@/data/catalog";
import { productImage } from "@/data/images";
import { productMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ProductCard({ product }: { product: Product }) {
  const categoryLabel = getCategory(product.category)?.shortName ?? AVAILABILITY_LABEL[product.availability];

  return (
    <article className="card-hover img-zoom group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <Link to="/produtos/$slug" params={{ slug: product.slug }} className="relative block aspect-[4/3] bg-muted">
        <img
          src={productImage(product.images[0] ?? "")}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded bg-brand px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-foreground">
              Novo
            </span>
          )}
          {product.featured && (
            <span className="rounded bg-ink px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink-foreground">
              Destaque
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium text-brand">{categoryLabel}</p>
        <Link
          to="/produtos/$slug"
          params={{ slug: product.slug }}
          className="font-display text-[0.95rem] font-semibold leading-snug text-foreground transition-colors hover:text-brand"
        >
          {product.name}
        </Link>
        <p className="text-xs text-muted-foreground">
          Compatível: {product.models.join(" / ")} · {product.brand}
        </p>
        <p className="mt-auto font-display text-sm font-bold text-foreground">Sob consulta</p>

        <div className="mt-2 flex gap-2">
          <Link
            to="/produtos/$slug"
            params={{ slug: product.slug }}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Ver detalhes
          </Link>
          <a
            href={productMessage(product.name, product.reference)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Consultar preço de ${product.name} pelo WhatsApp`}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-3 py-2 text-xs font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" aria-hidden />
            Consultar preço
          </a>
        </div>
      </div>
    </article>
  );
}

/** Cartão de categoria usado na página inicial e noutras secções. */
export function CategoryCard({
  image,
  title,
  description,
  href,
  search,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  search?: Record<string, string>;
}) {
  return (
    <Link
      to={href}
      search={search as never}
      className="card-hover img-zoom group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
    >
      <div className="aspect-[4/3] bg-muted">
        <img src={image} alt={title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
