import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Instagram, Truck } from "lucide-react";
import { enquiryMessage, generalMessage, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { PageHero } from "@/components/PageParts";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — N4x4 And Truck Spares" },
      { name: "description", content: "Contacte a N4x4 And Truck Spares pelo WhatsApp +258 84 934 5783. Tchumene 2, Matola, Moçambique." },
      { property: "og:title", content: "Contactos — N4x4" },
      { property: "og:description", content: "Peça uma cotação ou confirme a compatibilidade pelo WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const inputCls = "h-11 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-brand focus:outline-none";

function ContactPage() {
  const [f, setF] = useState({ name: "", phone: "", brand: "", model: "", year: "", part: "", message: "" });
  const [error, setError] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim() || !f.part.trim()) return setError("Indique o seu nome e a peça que procura.");
    setError("");
    window.open(enquiryMessage(f), "_blank", "noopener");
  }

  return (
    <>
      <PageHero eyebrow="Contactos" title="Fale connosco" intro="Peça uma cotação ou confirme a compatibilidade. Respondemos pelo WhatsApp." />
      <section className="container-site grid gap-10 py-12 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={submit} className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2" noValidate>
          <h2 className="font-display text-xl font-bold sm:col-span-2">Pedido de cotação</h2>
          <label className="text-sm">Nome *<input className={`${inputCls} mt-1`} value={f.name} onChange={set("name")} maxLength={80} /></label>
          <label className="text-sm">Telefone<input className={`${inputCls} mt-1`} value={f.phone} onChange={set("phone")} maxLength={20} inputMode="tel" /></label>
          <label className="text-sm">Marca
            <select className={`${inputCls} mt-1`} value={f.brand} onChange={set("brand")}><option value="">—</option><option>Ford</option><option>Mazda</option></select>
          </label>
          <label className="text-sm">Modelo<input className={`${inputCls} mt-1`} value={f.model} onChange={set("model")} maxLength={40} placeholder="Ranger, BT-50..." /></label>
          <label className="text-sm">Ano<input className={`${inputCls} mt-1`} value={f.year} onChange={set("year")} maxLength={4} inputMode="numeric" /></label>
          <label className="text-sm">Peça pretendida *<input className={`${inputCls} mt-1`} value={f.part} onChange={set("part")} maxLength={100} /></label>
          <label className="text-sm sm:col-span-2">Mensagem
            <textarea className="mt-1 min-h-28 w-full rounded-md border border-border bg-background p-3 text-sm focus:border-brand focus:outline-none" value={f.message} onChange={set("message")} maxLength={600} />
          </label>
          {error && <p className="text-sm text-destructive sm:col-span-2" role="alert">{error}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-strong sm:col-span-2">
            <WhatsAppIcon className="h-4 w-4" /> Enviar pelo WhatsApp
          </button>
        </form>
        <aside className="space-y-4">
          <a href={generalMessage()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-brand">
            <WhatsAppIcon className="h-6 w-6 text-brand" /><div><p className="font-semibold">WhatsApp</p><p className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p></div>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-brand">
            <Instagram className="h-6 w-6 text-brand" /><div><p className="font-semibold">Instagram</p><p className="text-sm text-muted-foreground">{INSTAGRAM_HANDLE}</p></div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
            <MapPin className="h-6 w-6 text-brand" /><div><p className="font-semibold">Localização</p><p className="text-sm text-muted-foreground">Tchumene 2, Matola, Moçambique</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
            <Truck className="h-6 w-6 text-brand" /><div><p className="font-semibold">Entregas</p><p className="text-sm text-muted-foreground">Para todo o país</p></div>
          </div>
        </aside>
      </section>
    </>
  );
}
