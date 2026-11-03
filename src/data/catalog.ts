/**
 * DADOS DE DEMONSTRAÇÃO — N4x4 And Truck Spares
 *
 * Este catálogo é conteúdo de demonstração, claramente identificado.
 * Nenhum preço real é inventado: todos os produtos aparecem como "Sob consulta".
 * A disponibilidade e a compatibilidade são dados de exemplo e devem ser
 * substituídos pela informação real da empresa antes da publicação.
 *
 * Para integrar um backend real (ex. base de dados com painel de administração),
 * substituir este módulo por chamadas à API mantendo a mesma forma de dados.
 */

export type CategorySlug =
  | "pecas-ford-ranger"
  | "pecas-mazda-bt50"
  | "suspensao"
  | "acessorios-4x4"
  | "acessorios-exteriores"
  | "acessorios-interiores"
  | "desempenho"
  | "manutencao";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  image: string;
}

export type VehicleBrand = "Ford" | "Mazda" | "Ford e Mazda";

export type Availability = "sob-consulta" | "sob-pedido";

export interface Product {
  id: string;
  slug: string;
  name: string;
  reference: string;
  category: CategorySlug;
  brand: VehicleBrand;
  models: string[];
  years: string; // intervalo de anos compatível (dado de demonstração)
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
  availability: Availability;
  featured: boolean;
  isNew: boolean;
}

export interface Project {
  id: string;
  title: string;
  vehicle: string;
  work: string;
  description: string;
  image: string;
}

export interface FitmentService {
  title: string;
  description: string;
  image: string;
}

/* ------------------------------------------------------------------ */
/* Categorias                                                          */
/* ------------------------------------------------------------------ */

export const CATEGORIES: Category[] = [
  {
    slug: "pecas-ford-ranger",
    name: "Peças para Ford Ranger",
    shortName: "Ford Ranger",
    description: "Peças de substituição e acessórios específicos para a gama Ford Ranger.",
    image: "Ford Ranger",
  },
  {
    slug: "pecas-mazda-bt50",
    name: "Peças para Mazda BT-50",
    shortName: "Mazda BT-50",
    description: "Peças de substituição e acessórios específicos para a gama Mazda BT-50.",
    image: "Mazda BT-50",
  },
  {
    slug: "suspensao",
    name: "Sistemas de suspensão",
    shortName: "Suspensão",
    description: "Amortecedores, molas e kit de elevação para maior conforto e controlo.",
    image: "suspensao",
  },
  {
    slug: "acessorios-4x4",
    name: "Acessórios 4x4",
    shortName: "Acessórios 4x4",
    description: "Equipamento para aventura: guinchos, iluminação, recuperação e mais.",
    image: "acessorios",
  },
  {
    slug: "acessorios-exteriores",
    name: "Acessórios exteriores",
    shortName: "Exteriores",
    description: "Para-choques, santantónios, snorkels e proteções para a sua pickup.",
    image: "exteriores",
  },
  {
    slug: "acessorios-interiores",
    name: "Acessórios interiores",
    shortName: "Interiores",
    description: "Capas de banco, tapetes e acabamentos para o interior da viatura.",
    image: "interiores",
  },
  {
    slug: "desempenho",
    name: "Peças de desempenho",
    shortName: "Desempenho",
    description: "Sistemas de escape e componentes para melhorar o desempenho.",
    image: "desempenho",
  },
  {
    slug: "manutencao",
    name: "Peças de manutenção",
    shortName: "Manutenção",
    description: "Filtros, travagem e componentes essenciais para a manutenção regular.",
    image: "manutencao",
  },
];

/** Categorias do seletor por veículo (regra do prompt, secção 5). */
export const VEHICLE_CATEGORIES = [
  "Suspensão",
  "Acessórios exteriores",
  "Acessórios interiores",
  "Desempenho",
  "Manutenção",
  "Outras peças",
] as const;

export const VEHICLE_BRANDS = ["Ford", "Mazda"] as const;

export const VEHICLE_MODELS: Record<(typeof VEHICLE_BRANDS)[number], string[]> = {
  Ford: ["Ranger"],
  Mazda: ["BT-50"],
};

export const VEHICLE_YEARS = Array.from({ length: 12 }, (_, i) => String(2025 - i));

/* ------------------------------------------------------------------ */
/* Imagens — mapas de categoria por conteúdo                           */
/* ------------------------------------------------------------------ */

// As imagens são importadas em src/data/images.ts para manter este módulo
// independente de bundling. Aqui guardamos apenas chaves descritivas.

/* ------------------------------------------------------------------ */
/* Produtos de demonstração                                            */
/* ------------------------------------------------------------------ */

export const PRODUCTS: Product[] = [
  {
    id: "p01",
    slug: "amortecedores-reforcados-ford-ranger",
    name: "Amortecedores reforçados para Ford Ranger",
    reference: "N4X4-SUS-001",
    category: "suspensao",
    brand: "Ford",
    models: ["Ranger"],
    years: "2015 – 2024",
    description:
      "Conjunto de amortecedores reforçados dianteiros e traseiros, pensados para utilização em estrada de terra e carga frequente. Oferecem maior estabilidade e controlo em pisos irregulares (produto de demonstração).",
    specs: [
      { label: "Posição", value: "Dianteiro e traseiro" },
      { label: "Tipo", value: "Pressão de gás, reforçado" },
      { label: "Compatibilidade", value: "Ford Ranger 2015 – 2024" },
    ],
    images: ["suspensao"],
    availability: "sob-consulta",
    featured: true,
    isNew: true,
  },
  {
    id: "p02",
    slug: "molas-helicoidais-elevacao",
    name: "Molas helicoidais de elevação",
    reference: "N4X4-SUS-002",
    category: "suspensao",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "2015 – 2024",
    description:
      "Kit de molas helicoidais para elevação da suspensão, ideal para quem procura mais altura livre ao solo e postura mais firme com carga ou acessórios (produto de demonstração).",
    specs: [
      { label: "Elevação", value: "Sob consulta" },
      { label: "Compatibilidade", value: "Ford Ranger / Mazda BT-50 2015 – 2024" },
    ],
    images: ["suspensao"],
    availability: "sob-consulta",
    featured: true,
    isNew: false,
  },
  {
    id: "p03",
    slug: "kit-travagem-discos-pastilhas",
    name: "Kit de travagem — discos e pastilhas",
    reference: "N4X4-MAN-001",
    category: "manutencao",
    brand: "Ford",
    models: ["Ranger"],
    years: "2015 – 2024",
    description:
      "Conjunto de discos de travão ventilados e pastilhas de fricção para substituição completa do sistema de travagem dianteiro (produto de demonstração).",
    specs: [
      { label: "Inclui", value: "Discos ventilados + pastilhas" },
      { label: "Posição", value: "Eixo dianteiro" },
      { label: "Compatibilidade", value: "Ford Ranger 2015 – 2024" },
    ],
    images: ["travagem"],
    availability: "sob-consulta",
    featured: true,
    isNew: false,
  },
  {
    id: "p04",
    slug: "kit-filtros-manutencao",
    name: "Kit de filtros de manutenção",
    reference: "N4X4-MAN-002",
    category: "manutencao",
    brand: "Mazda",
    models: ["BT-50"],
    years: "2016 – 2024",
    description:
      "Kit de filtros para revisão periódica: filtro de óleo, filtro de ar e filtro de combustível (produto de demonstração).",
    specs: [
      { label: "Inclui", value: "Filtro de óleo, ar e combustível" },
      { label: "Compatibilidade", value: "Mazda BT-50 2016 – 2024" },
    ],
    images: ["filtros"],
    availability: "sob-consulta",
    featured: false,
    isNew: false,
  },
  {
    id: "p05",
    slug: "para-choques-dianteiro-guincho",
    name: "Para-choques dianteiro com encaixe de guincho",
    reference: "N4X4-EXT-001",
    category: "acessorios-exteriores",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "2015 – 2024",
    description:
      "Para-choques dianteiro em aço com encaixe para guincho e suportes para iluminação adicional. Construção robusta para uso todo-o-terreno (produto de demonstração).",
    specs: [
      { label: "Material", value: "Aço com pintura eletrostática" },
      { label: "Inclui", value: "Encaixe de guincho e suportes de LED" },
      { label: "Compatibilidade", value: "Ford Ranger / Mazda BT-50" },
    ],
    images: ["parachoques"],
    availability: "sob-consulta",
    featured: true,
    isNew: false,
  },
  {
    id: "p06",
    slug: "snorkel-todo-o-terreno",
    name: "Snorkel todo-o-terreno",
    reference: "N4X4-EXT-002",
    category: "acessorios-exteriores",
    brand: "Ford",
    models: ["Ranger"],
    years: "2015 – 2024",
    description:
      "Snorkel de elevação da admissão de ar, indicado para travessias de água e ambientes com muita poeira (produto de demonstração).",
    specs: [
      { label: "Material", value: "Plástico de engenharia UV" },
      { label: "Compatibilidade", value: "Ford Ranger 2015 – 2024" },
    ],
    images: ["snorkel"],
    availability: "sob-consulta",
    featured: false,
    isNew: true,
  },
  {
    id: "p07",
    slug: "barra-led-todo-o-terreno",
    name: "Barra de LED para todo-o-terreno",
    reference: "N4X4-4X4-001",
    category: "acessorios-4x4",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "Qualquer ano",
    description:
      "Barra de iluminação LED de alta intensidade para condução noturna em estradas não pavimentadas. Instalação no para-choques ou santantónio (produto de demonstração).",
    specs: [
      { label: "Potência", value: "Sob consulta" },
      { label: "Grau de proteção", value: "IP67" },
      { label: "Compatibilidade", value: "Universal para pickups" },
    ],
    images: ["led"],
    availability: "sob-consulta",
    featured: true,
    isNew: false,
  },
  {
    id: "p08",
    slug: "guincho-4x4",
    name: "Guincho 4x4 para recuperação",
    reference: "N4X4-4X4-002",
    category: "acessorios-4x4",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "Qualquer ano",
    description:
      "Guincho elétrico para operações de recuperação em pista, com cabo sintético e comando. Requer para-choques com encaixe compatível (produto de demonstração).",
    specs: [
      { label: "Capacidade", value: "Sob consulta" },
      { label: "Inclui", value: "Cabo sintético e comando" },
      { label: "Compatibilidade", value: "Para-choques com encaixe de guincho" },
    ],
    images: ["guincho"],
    availability: "sob-pedido",
    featured: false,
    isNew: false,
  },
  {
    id: "p09",
    slug: "tampa-rigida-caixa",
    name: "Tampa rígida de caixa de carga",
    reference: "N4X4-EXT-003",
    category: "acessorios-exteriores",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "2015 – 2024",
    description:
      "Tampa rígida para a caixa de carga, que protege o conteúdo da chuva e do pó e dá uma linha mais desportiva à viatura (produto de demonstração).",
    specs: [
      { label: "Material", value: "Fibra reforçada" },
      { label: "Compatibilidade", value: "Ford Ranger / Mazda BT-50 caixa simples e dupla" },
    ],
    images: ["tampa"],
    availability: "sob-consulta",
    featured: false,
    isNew: false,
  },
  {
    id: "p10",
    slug: "capas-de-banco-resistentes",
    name: "Capas de banco resistentes",
    reference: "N4X4-INT-001",
    category: "acessorios-interiores",
    brand: "Ford e Mazda",
    models: ["Ranger", "BT-50"],
    years: "2015 – 2024",
    description:
      "Capas de banco em tecido resistente à água e ao desgaste, com encaixe por cabines específicas. Fáceis de limpar depois de dias de campo (produto de demonstração).",
    specs: [
      { label: "Material", value: "Tecido impermeável" },
      { label: "Inclui", value: "Jogo completo de bancos dianteiros e traseiros" },
      { label: "Compatibilidade", value: "Ford Ranger / Mazda BT-50" },
    ],
    images: ["interior"],
    availability: "sob-consulta",
    featured: false,
    isNew: false,
  },
  {
    id: "p11",
    slug: "tapetes-borracha-todo-o-terreno",
    name: "Tapetes de borracha todo-o-terreno",
    reference: "N4X4-INT-002",
    category: "acessorios-interiores",
    brand: "Mazda",
    models: ["BT-50"],
    years: "2016 – 2024",
    description:
      "Jogo de tapetes de borracha moldados para o interior da viatura, com bordos elevados para reter água e poeira (produto de demonstração).",
    specs: [
      { label: "Material", value: "Borracha de alta resistência" },
      { label: "Inclui", value: "Jogo completo" },
      { label: "Compatibilidade", value: "Mazda BT-50 2016 – 2024" },
    ],
    images: ["interior"],
    availability: "sob-consulta",
    featured: false,
    isNew: false,
  },
  {
    id: "p12",
    slug: "sistema-escape-desportivo",
    name: "Sistema de escape em aço inoxidável",
    reference: "N4X4-DES-001",
    category: "desempenho",
    brand: "Ford",
    models: ["Ranger"],
    years: "2015 – 2024",
    description:
      "Sistema de escape em aço inoxidável com melhor escoamento de gases, para resposta mais imediata e som mais profundo (produto de demonstração).",
    specs: [
      { label: "Material", value: "Aço inoxidável" },
      { label: "Diâmetro", value: "Sob consulta" },
      { label: "Compatibilidade", value: "Ford Ranger 2015 – 2024" },
    ],
    images: ["escape"],
    availability: "sob-consulta",
    featured: false,
    isNew: false,
  },
];

/* ------------------------------------------------------------------ */
/* Projetos de demonstração                                            */
/* ------------------------------------------------------------------ */

export const PROJECTS: Project[] = [
  {
    id: "pr01",
    title: "Elevação e suspensão reforçada",
    vehicle: "Ford Ranger",
    work: "Instalação de suspensão",
    description:
      "Elevação da suspensão com molas reforçadas e amortecedores adequados a pisos exigentes (projeto de demonstração).",
    image: "projeto-suspensao",
  },
  {
    id: "pr02",
    title: "Preparação para expedição",
    vehicle: "Mazda BT-50",
    work: "Melhorias exteriores",
    description:
      "Preparação de viatura para viagens longas: proteção exterior, iluminação e organização da caixa de carga (projeto de demonstração).",
    image: "projeto-expedicao",
  },
  {
    id: "pr03",
    title: "Instalação de iluminação LED",
    vehicle: "Ford Ranger",
    work: "Instalação 4x4",
    description:
      "Montagem de barra de LED e focos adicionais para condução noturna em pista (projeto de demonstração).",
    image: "projeto-led",
  },
  {
    id: "pr04",
    title: "Para-choques e recuperação",
    vehicle: "Ford Ranger",
    work: "Modificação exterior",
    description:
      "Substituição do para-choques original por versão em aço com encaixe de guincho (projeto de demonstração).",
    image: "projeto-parachoques",
  },
  {
    id: "pr05",
    title: "Preparação de trabalho no mato",
    vehicle: "Mazda BT-50",
    work: "Melhorias de suspensão",
    description:
      "Reforço de suspensão e proteção inferior para uso profissional em pisos degradados (projeto de demonstração).",
    image: "projeto-trabalho",
  },
  {
    id: "pr06",
    title: "Personalização exterior completa",
    vehicle: "Ford Ranger",
    work: "Personalização de viaturas",
    description:
      "Conjunto de modificações exteriores: tampa de caixa, estribos, snorkel e detalhes em preto (projeto de demonstração).",
    image: "projeto-personalizacao",
  },
];

/* ------------------------------------------------------------------ */
/* Área de montagem                                                    */
/* ------------------------------------------------------------------ */

export const FITMENT_SERVICES: FitmentService[] = [
  {
    title: "Instalação de suspensão",
    description:
      "Montagem e regulagem de kits de suspensão, molas e amortecedores com rigor e segurança.",
    image: "montagem-suspensao",
  },
  {
    title: "Instalação de acessórios 4x4",
    description:
      "Instalação de guinchos, iluminação adicional e equipamento de recuperação.",
    image: "montagem-acessorios",
  },
  {
    title: "Melhorias exteriores",
    description:
      "Montagem de para-choques, santantónios, snorkels e proteções exteriores.",
    image: "montagem-exteriores",
  },
  {
    title: "Personalização de viaturas",
    description:
      "Soluções à medida para equipar a sua pickup de acordo com o uso que lhe dá.",
    image: "montagem-personalizacao",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(slug: CategorySlug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function productsByCategory(slug: CategorySlug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function productsByBrand(brand: "Ford" | "Mazda") {
  return PRODUCTS.filter((p) => p.brand === brand || p.brand === "Ford e Mazda");
}

export function featuredProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

export function relatedProducts(product: Product, count = 4) {
  const same = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
  const others = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category && p.brand === product.brand
  );
  return [...same, ...others].slice(0, count);
}

export const AVAILABILITY_LABEL: Record<Availability, string> = {
  "sob-consulta": "Disponibilidade sob consulta",
  "sob-pedido": "Sob pedido",
};
