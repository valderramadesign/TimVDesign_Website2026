import Image from "next/image";
import logoText from "@/components/images/Logo-text.png";
import logoDots from "@/components/images/Logo-dots.png";

/* Split into two layers so day mode can darken the "TiM.V" wordmark
   (.theme-logo) while the dots stay the logo's blue instead of going
   black with it — masked from logoDots's alpha and painted with
   --logo-dot-blue, the same var contact-line.tsx uses. */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-block${className ? ` ${className}` : ""}`}
      style={{ width: 69, height: 29 }}
    >
      <Image src={logoText} alt="TiM.V" fill className="theme-logo" />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--logo-dot-blue, #00B0D8)",
          maskImage: `url(${logoDots.src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskImage: `url(${logoDots.src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </span>
  );
}
