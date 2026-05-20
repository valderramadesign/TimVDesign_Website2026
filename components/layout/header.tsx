"use client";

import Logo from "@/components/ui/logo";

interface HeaderProps {
  onResumeToggle?: () => void;
  resumeOpen?: boolean;
}

export default function Header({ onResumeToggle, resumeOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full shrink-0">
      <button
        onClick={onResumeToggle}
        className="bg-[#484848] text-white text-base font-normal font-sans leading-none px-4 py-2 rounded-full whitespace-nowrap border border-transparent hover:border-white transition-colors duration-150"
      >
        {resumeOpen ? "Close" : "Resume"}
      </button>
      <Logo />
    </header>
  );
}
