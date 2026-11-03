import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";

const selectCls =
  "h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:border-brand focus:outline-none";

/** Catálogo com pesquisa e filtros; pode ser restringido a uma marca. */
export function Catalog({
  initialQuery = "",
  initialCategory = "",
  lockBrand,
  categories,
}: {
  initialQuery?: string;
  initialCategory?: string;
  lockBrand?: "Ford" | "Mazda";
  categories?: CategorySlug[];
}) {
  const [q, setQ] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState<string>(lockBrand ?? "");
  const [sort, setSort] = useState("destaque");

  const base = useMemo(
    () => PRODUCTS.filter((p) => !categories || categories.includes(p.category)),
    [categories],
  );

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = base.filter((p) => {
      if (category && p.category !== category) return false;
      if (brand && !(p.brand === brand || p.brand === "Ford e Mazda")) return false;
      if (term && ![p.name, p.reference, p.description, ...p.models].join(" ").toLowerCase().includes(term)) return false;
      return true;
    });
    if (sort === "nome") list.sort((a, b) => a.name.localeCompare(b.name, "pt"));
    else if (sort === "novos") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    else list.sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [base, q, category, brand, sort]);

  const cats = CATEGORIES.filter((c) => base.some((p) => p.category === c.slug));

  return (
    <div>
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto_auto_auto]">
        <label className="relative">
          <span className="sr-only">Pesquisar</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Pesquisar por nome, referência ou modelo..."
            className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm focus:border-brand focus:outline-none"
          />
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </label>
        <select aria-label="Categoria" className={selectCls} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {cats.map((c) => <option key={c.slug} value={c.slug}>{c.shortName}</option>)}
        </select>
        {!lockBrand && (
          <select aria-label="Marca" className={selectCls} value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">Ford e Mazda</option>
            <option value="Ford">Ford</option>
            <option value="Mazda">Mazda</option>
          </select>
        )}
        <select aria-label="Ordenar" className={selectCls} value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="destaque">Destaques primeiro</option>
          <option value="novos">Novidades primeiro</option>
          <option value="nome">Nome (A–Z)</option>
        </select>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{results.length} produto(s) encontrado(s)</p>
      {results.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Nenhum produto corresponde à pesquisa. Fale connosco pelo WhatsApp — podemos procurar a peça por si.
        </div>
      )}
    </div>
  );
}
