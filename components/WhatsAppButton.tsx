import { siteConfig } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lift transition hover:scale-105 hover:bg-[#E67E00]"
      href={siteConfig.whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" fill="currentColor" height={30} viewBox="0 0 32 32" width={30} xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.83 1.782 6.862L2 30l7.338-1.762A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.54 11.54 0 0 1-5.89-1.614l-.422-.25-4.354 1.046 1.072-4.24-.276-.437A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6Zm6.34-8.64c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.103 1.366-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.727-1.034-.923-1.732-2.063-1.935-2.411-.203-.348-.022-.536.152-.71.157-.155.348-.406.522-.609.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.667-.012c-.232 0-.61.087-.928.435-.32.348-1.218 1.19-1.218 2.9s1.247 3.363 1.42 3.595c.174.232 2.454 3.746 5.946 5.252.831.359 1.48.573 1.986.733.834.265 1.594.228 2.194.138.67-.1 2.06-.843 2.35-1.657.29-.814.29-1.513.203-1.657-.087-.145-.319-.232-.667-.406Z"/>
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 hidden w-max rounded-md bg-brand-ink px-3 py-2 text-xs font-semibold text-white shadow-soft group-hover:block">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
