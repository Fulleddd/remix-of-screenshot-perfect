import { useState } from "react";
import { VEHICLE_BRANDS, VEHICLE_MODELS, VEHICLE_YEARS, VEHICLE_CATEGORIES } from "@/data/catalog";
import { vehicleMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const selectCls =
  "h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground focus:border-brand focus:outline-none";

/** Seletor por veículo: envia o pedido de compatibilidade pelo WhatsApp. */
export function VehicleSelector() {
  const [brand, setBrand] = useState<"" | (typeof VEHICLE_BRANDS)[number]>("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-xl shadow-black/10 md:p-6">
      <h2 className="font-display text-lg font-bold text-foreground">Encontre peças para a sua viatura</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <select aria-label="Marca" className={selectCls} value={brand} onChange={(e) => { setBrand(e.target.value as typeof brand); setModel(""); }}>
          <option value="">Marca</option>
          {VEHICLE_BRANDS.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select aria-label="Modelo" className={selectCls} value={model} onChange={(e) => setModel(e.target.value)} disabled={!brand}>
          <option value="">Modelo</option>
          {brand && VEHICLE_MODELS[brand].map((m) => <option key={m}>{m}</option>)}
        </select>
        <select aria-label="Ano" className={selectCls} value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Ano</option>
          {VEHICLE_YEARS.map((y) => <option key={y}>{y}</option>)}
        </select>
        <select aria-label="Categoria" className={selectCls} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Categoria</option>
          {VEHICLE_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <a
          href={vehicleMessage({ brand, model, year, category })}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand px-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
        >
          <WhatsAppIcon className="h-4 w-4" /> Procurar peças
        </a>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Confirmamos a compatibilidade consigo pelo WhatsApp antes de qualquer encomenda.</p>
    </div>
  );
}
