/**
 * WhatsApp — central de contactos.
 * Todos os botões do site usam estes helpers com mensagens em português.
 */

export const WHATSAPP_NUMBER = "258849345783";
export const WHATSAPP_DISPLAY = "+258 84 934 5783";
export const INSTAGRAM_HANDLE = "@n4x4_group_";
export const INSTAGRAM_URL = "https://www.instagram.com/n4x4_group_";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Mensagem de contacto geral. */
export function generalMessage() {
  return waLink(
    "Bom dia, N4x4 And Truck Spares.\n\nVisitei o vosso website e gostaria de obter mais informações sobre os vossos produtos e serviços."
  );
}

/** Mensagem de consulta de um produto. */
export function productMessage(name: string, reference: string) {
  return waLink(
    `Bom dia, N4x4 And Truck Spares.\n\nTenho interesse no produto ${name}, referência ${reference}, apresentado no vosso website.\n\nGostaria de saber mais informações sobre o preço e a disponibilidade.\n\nObrigado.`
  );
}

/** Mensagem de pedido de compatibilidade por veículo. */
export function vehicleMessage(input: {
  brand?: string;
  model?: string;
  year?: string;
  category?: string;
}) {
  return waLink(
    `Bom dia!\n\nPreciso de ajuda para encontrar uma peça compatível com a minha viatura.\n\nMarca: ${input.brand || "—"}\nModelo: ${input.model || "—"}\nAno: ${input.year || "—"}\nPeça pretendida: ${input.category || "—"}\n\nPodem ajudar-me?\n\nObrigado.`
  );
}

/** Mensagem a partir do formulário de contacto. */
export function enquiryMessage(fields: {
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  part: string;
  message: string;
}) {
  return waLink(
    `Bom dia, N4x4 And Truck Spares.\n\nO meu nome é ${fields.name}.\n\nMarca da viatura: ${fields.brand}\nModelo da viatura: ${fields.model}\nAno da viatura: ${fields.year}\nPeça ou serviço pretendido: ${fields.part}\n\nMensagem: ${fields.message}\n\nO meu número de telefone: ${fields.phone}\n\nObrigado.`
  );
}

/** Mensagem para a área de montagem. */
export function fitmentMessage(service?: string) {
  return waLink(
    `Bom dia, N4x4 And Truck Spares.\n\nGostaria de obter informações sobre os vossos serviços de instalação${service ? ` — ${service}` : ""}.\n\nObrigado.`
  );
}
