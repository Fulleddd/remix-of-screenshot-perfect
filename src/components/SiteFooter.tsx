import { Link } from "@tanstack/react-router";
import { Truck, Instagram } from "lucide-react";
import logo from "@/assets/logo-n4x4.png";
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const LINKS = [
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

export function SiteFooter() {
  return (
    <footer className="border-t border-line-ink bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="N4x4 And Truck Spares" width={1024} height={1024} loading="lazy" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Peças e acessórios especializados para pickups Ford e Mazda.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Contactos</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li>
              <a
                href="https://wa.me/258849345783"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-ink-foreground"
              >
                <WhatsAppIcon className="h-4 w-4 text-brand" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-ink-foreground"
              >
                <Instagram className="h-4 w-4 text-brand" />
                Instagram: {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>Tchumene 2, Matola, Moçambique</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Entregas</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
            <Truck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
            Entregas para todo o país.
          </p>
        </div>
      </div>

      <div className="border-t border-line-ink py-5">
        <p className="container-site text-center text-xs text-ink-muted">
          © {new Date().getFullYear()} N4x4 And Truck Spares. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
