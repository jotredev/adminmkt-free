"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

export function NavLeadsManagement() {
  const pathname = usePathname();

  return (
    <ul className="bg-background p-1 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-1 w-full md:w-fit">
      <li>
        <Link
          href="/leads-management"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/leads-management" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Visión general
        </Link>
      </li>
      <li>
        <Link
          href="/leads-management/segmented"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/leads-management/segmented" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Segmentados
        </Link>
      </li>
      <li>
        <Link
          href="/leads-management/funnel"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/leads-management/funnel" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Embudo de clientes
        </Link>
      </li>
      <li>
        <Link
          href="/leads-management/export"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/leads-management/export" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Exportar
        </Link>
      </li>
      <li>
        <Link
          href="/leads-management/nurturing"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/leads-management/nurturing" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Captación de clientes
        </Link>
      </li>
    </ul>
  );
}
