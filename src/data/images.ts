import travagem from "@/assets/produto-travagem.png";
import suspensao from "@/assets/produto-suspensao.png";
import filtros from "@/assets/produto-filtros.png";
import parachoques from "@/assets/produto-parachoques.png";
import led from "@/assets/produto-led.png";
import guincho from "@/assets/produto-guincho.png";
import interior from "@/assets/produto-interior.png";
import escape from "@/assets/produto-escape.png";
import snorkel from "@/assets/produto-snorkel.png";
import tampa from "@/assets/produto-tampa.png";
import hero from "@/assets/hero-pickups.png";
import oficina from "@/assets/oficina-montagem.png";
import projetoRanger from "@/assets/projeto-ranger.png";
import projetoBt50 from "@/assets/projeto-bt50.png";

/** Mapa de imagens por chave descritiva usada em src/data/catalog.ts. */
export const PRODUCT_IMAGES: Record<string, string> = {
  travagem,
  suspensao,
  filtros,
  parachoques,
  led,
  guincho,
  interior,
  escape,
  snorkel,
  tampa,
};

export const HERO_IMAGE = hero;
export const OFICINA_IMAGE = oficina;
export const PROJETO_RANGER_IMAGE = projetoRanger;
export const PROJETO_BT50_IMAGE = projetoBt50;

/** Imagem representativa de cada categoria. */
export const CATEGORY_IMAGES: Record<string, string> = {
  "pecas-ford-ranger": projetoRanger,
  "pecas-mazda-bt50": projetoBt50,
  suspensao,
  "acessorios-4x4": guincho,
  "acessorios-exteriores": parachoques,
  "acessorios-interiores": interior,
  desempenho: escape,
  manutencao: filtros,
};

export function productImage(key: string): string {
  return PRODUCT_IMAGES[key] ?? suspensao;
}

/** Imagens de projeto (conteúdo de demonstração). */
export const PROJECT_IMAGES: Record<string, string> = {
  "projeto-suspensao": projetoRanger,
  "projeto-expedicao": projetoBt50,
  "projeto-led": led,
  "projeto-parachoques": parachoques,
  "projeto-trabalho": projetoBt50,
  "projeto-personalizacao": snorkel,
};

export function projectImage(key: string): string {
  return PROJECT_IMAGES[key] ?? projetoRanger;
}

/** Imagem de cada serviço da área de montagem. */
export const FITMENT_IMAGES: Record<string, string> = {
  "montagem-suspensao": suspensao,
  "montagem-acessorios": guincho,
  "montagem-exteriores": parachoques,
  "montagem-personalizacao": projetoRanger,
};

export function fitmentImage(key: string): string {
  return FITMENT_IMAGES[key] ?? oficina;
}
