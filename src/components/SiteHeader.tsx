import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Search,
  Menu,
  X,
  Truck,
  ShieldCheck,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo-n4x4.png";
import { WHATSAPP_DISPLAY, generalMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const NAV = [
  { label: "Início", to: "/" },
  { label: "Produtos", to: "/produtos" },
  { label: "Ford", to: "/pecas-ford" },
  { label: "Mazda", to: "/pecas-mazda" },
  { label: "Acessórios 4x4", to: "/acessorios" },
  { label: "Montagem", to: "/montagem" },
  { label: "Projetos", to: "/projetos" },
  { label: "Sobre nós", to: "/sobre-nos" },
  { label: "Contacto", to: "/contactos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    navigate({ to: "/produtos", search: q ? { q } : {} });
    setQuery("");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior */}
      <div className="hidden bg-ink md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs text-ink-muted">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand" aria-hidden />
              Peças e Acessórios 4x4
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" aria-hidden />
              Qualidade Garantida
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-brand" aria-hidden />
              Entrega em Todo o País
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="transition-colors hover:text-ink-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/n4x4_group_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-ink-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="transition-colors hover:text-ink-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div className="border-b border-line-ink bg-ink-2/95 backdrop-blur supports-[backdrop-filter]:bg-ink-2/85">
        <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex shrink-0 items-center" aria-label="N4x4 And Truck Spares — Início">
            <img src={logo} alt="N4x4 And Truck Spares" width={1024} height={1024} className="h-11 w-auto md:h-14" />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 xl:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand text-brand-foreground"
                      : "text-ink-foreground/90 hover:bg-ink-3 hover:text-ink-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <form onSubmit={submitSearch} className="relative hidden lg:block" role="search">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar produtos..."
                aria-label="Pesquisar produtos"
                className="h-10 w-56 rounded-full border border-line-ink bg-ink-3 pl-10 pr-4 text-sm text-ink-foreground placeholder:text-ink-muted focus:border-brand focus:outline-none"
              />
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            </form>

            <a
              href={generalMessage()}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden />
              {WHATSAPP_DISPLAY}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-ink text-ink-foreground transition-colors hover:bg-ink-3 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvel */}
      <div
        className={[
          "overflow-hidden border-b border-line-ink bg-ink-2 transition-all duration-300 xl:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-b-0",
        ].join(" ")}
      >
        <nav aria-label="Navegação móvel" className="container-site flex flex-col gap-1 py-4">
          <form onSubmit={submitSearch} className="relative mb-2" role="search">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar produtos..."
              aria-label="Pesquisar produtos"
              className="h-11 w-full rounded-full border border-line-ink bg-ink-3 pl-10 pr-4 text-sm text-ink-foreground placeholder:text-ink-muted focus:border-brand focus:outline-none"
            />
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
          </form>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-foreground/90 transition-colors hover:bg-ink-3 hover:text-ink-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={generalMessage()}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
