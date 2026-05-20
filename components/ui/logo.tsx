import Image from "next/image";
import logoImg from "@/components/images/Logo.png";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logoImg}
      alt="TiM.V"
      width={69}
      height={29}
      className={className}
    />
  );
}
