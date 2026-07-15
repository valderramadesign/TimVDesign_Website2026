import Link from "next/link";

type BackToHomeButtonProps = {
  className?: string;
  fontFamily?: string;
};

export default function BackToHomeButton({
  className = "",
  fontFamily = "var(--font-league-spartan)",
}: BackToHomeButtonProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-full bg-[#484848] px-6 lg:px-[30px] py-3 lg:py-[16px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060] ${className}`}
      style={{ fontFamily }}
    >
      Back to Homepage
    </Link>
  );
}
