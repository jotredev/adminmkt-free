"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import {
  IoChevronForwardCircleOutline,
  IoSparklesOutline
} from "react-icons/io5";

export function CardPromoteProducts() {
  return (
    <Card className="bg-primary/10 dark:bg-background text-primary">
      <CardHeader className="grid grid-cols-6 gap-3">
        <span className="col-span-1 flex items-center justify-center size-10 rounded-full border border-border">
          <IoSparklesOutline className="size-5" />
        </span>
        <CardTitle className="col-span-5">
          Promociona los productos más vendidos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Cree una campaña de marketing para aumentar las ventas y los indices
          de conversión de sus productos. Lance campañas especificas y lance
          ofertas por tiempo limitado.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href="/"
          className="flex items-center justify-center w-full gap-2 bg-primary text-white h-14 px-3 rounded-full transition-all duration-300 hover:ring-2 hover:ring-primary ring-offset-2 ring-offset-background"
        >
          <span>Nuevo producto</span>
          <IoChevronForwardCircleOutline className="size-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
