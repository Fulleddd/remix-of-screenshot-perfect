import { generalMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** Botão flutuante de WhatsApp, visível em todas as páginas. */
export function WhatsAppFab() {
  return (
    <a
      href={generalMessage()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar connosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
