import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { AVAILABILITY_LABEL, getCategory, getProductBySlug, relatedProducts } from "@/data/catalog";
import { productImage } from "@/data/images";
import { productMessage, fitmentMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/PageParts";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — N4x4 And Truck Spares` : "Produto — N4x4 And Truck Spares";
    const desc = p ? p.description.slice(0, 155) : "Produto não disponível.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Produto não encontrado</h1>
      <Link to="/produtos" className="mt-4 inline-block text-brand hover:underline">Voltar ao catálogo</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const cat = getCategory(p.category);
  return (
    <>
      <section className="container-site py-10">
        <Link to="/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand">
          <ChevronLeft className="h-4 w-4" /> Voltar ao catálogo
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <img src={productImage(p.images[0] ?? "")} alt={p.name} width={1024} height={1024} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-brand">{cat?.name}</p>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">{p.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Referência: {p.reference}</p>
            <p className="mt-6 font-display text-2xl font-bold">Preço sob consulta</p>
            <p className="text-sm text-muted-foreground">{AVAILABILITY_LABEL[p.availability]}</p>
            <p className="mt-6 leading-relaxed text-foreground/85">{p.description}</p>
            <dl className="mt-6 divide-y divide-border rounded-lg border border-border">
              <div className="flex justify-between gap-4 p-3 text-sm"><dt className="text-muted-foreground">Marca</dt><dd className="font-medium">{p.brand}</dd></div>
              <div className="flex justify-between gap-4 p-3 text-sm"><dt className="text-muted-foreground">Modelos</dt><dd className="font-medium">{p.models.join(", ")}</dd></div>
              <div className="flex justify-between gap-4 p-3 text-sm"><dt className="text-muted-foreground">Anos</dt><dd className="font-medium">{p.years}</dd></div>
              {p.specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 p-3 text-sm"><dt className="text-muted-foreground">{s.label}</dt><dd className="text-right font-medium">{s.value}</dd></div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">Confirme sempre a compatibilidade com a sua viatura antes da compra.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={productMessage(p.name, p.reference)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-strong">
                <WhatsAppIcon className="h-4 w-4" /> Consultar preço no WhatsApp
              </a>
              <a href={fitmentMessage(p.name)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold hover:border-brand hover:text-brand">
                Pedir montagem
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted/50 py-14">
        <div className="container-site">
          <SectionHeading title="Produtos relacionados" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts(p).map((r) => <ProductCard key={r.id} product={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}
