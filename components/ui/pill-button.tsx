import Link from "next/link";

type PillButtonProps = {
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function PillButton({
  label,
  active,
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: PillButtonProps) {
  const className = `px-4 py-2 rounded-full text-base font-normal font-sans leading-none whitespace-nowrap border transition-colors duration-150 cursor-pointer ${
    active
      ? "bg-white text-black border-white"
      : "bg-[#484848] text-white border-transparent hover:border-white"
  }`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {label}
    </button>
  );
}
