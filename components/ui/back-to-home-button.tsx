import Link from "next/link";
import { CTA_PILL_SIZE, type CtaPillSize } from "@/components/ui/cta-pill";

type BackToHomeButtonProps = {
  className?: string;
  fontFamily?: string;
  /** Type size below the lg breakpoint. Above it, every CTA is 32px. */
  size?: CtaPillSize;
};

export default function BackToHomeButton({
  className = "",
  fontFamily = "var(--font-league-spartan)",
  size = "lg",
}: BackToHomeButtonProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-full bg-[#262626] px-6 lg:px-[30px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#333333] ${CTA_PILL_SIZE[size]} ${className}`}
      style={{ fontFamily }}
    >
      Back to Homepage
    </Link>
  );
}
