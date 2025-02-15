"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

export function NavProducts() {
  const pathname = usePathname();

  return (
    <ul className="bg-background p-1 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-1 w-full md:w-fit">
      <li>
        <Link
          href="/products"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/products" && "bg-primary text-white hover:bg-primary"
          )}
        >
          Visión general
        </Link>
      </li>
      <li>
        <Link
          href="/products/products-management"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/products/products-management" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Gestor de productos
        </Link>
      </li>
      <li>
        <Link
          href="/products/inventory"
          className={cn(
            "py-2 px-4 rounded-full block hover:bg-secondary transition-colors duration-150",
            pathname === "/products/inventory" &&
              "bg-primary text-white hover:bg-primary"
          )}
        >
          Inventario
        </Link>
      </li>
    </ul>
  );
}
