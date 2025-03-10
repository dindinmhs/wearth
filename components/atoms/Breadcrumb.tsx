import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-gray-500 text-base md:text-lg">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <IoChevronForward className="" />}
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-gray-900 transition-colors px-3 hover:bg-gray-200 rounded-full"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium ml-1 truncate md:truncate-none">{item.label}</span>

          )}
        </div>
      ))}
    </nav>
  );
}