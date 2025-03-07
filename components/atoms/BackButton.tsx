import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface BackButtonProps {
  href: string;
}

export function BackButton({ href }: BackButtonProps) {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
    >
      <IoArrowBack className="text-xl transition-transform group-hover:-translate-x-1" />
      <span className="font-medium">Back</span>
    </Link>
  );
}