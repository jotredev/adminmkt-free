import Link from "next/link";

import {ProductCards} from "@/components/pages/products/products-cards";
import {DatePickerWithPresets} from "@/components/ui-custom/date-picker";
import {NavProducts} from "@/components/ui-custom/navs/nav-products";
import {CardTopSellingProducts} from "@/components/ui-custom/products/card-top-selling-products";
import {Title} from "@/components/ui-custom/title";
import {Button} from "@/components/ui/button";
import {PromoteCard} from "@/components/ui-custom/cards/promote-card";
import {TableProductPerformance} from "@/components/pages/products/table-product-performance";

import {IoCloudUploadOutline, IoReload, IoAdd} from "react-icons/io5";

export default function ProductsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-2">
          <Title>Productos</Title>
          <p className="text-muted-foreground text-sm">
            Gestione y controle sus productos y existencias.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DatePickerWithPresets />
          <Button size="sm" variant="outline" className="border-none">
            <IoCloudUploadOutline className="size-5" /> Exportar
          </Button>
          <Button size="icon" variant="outline" className="border-none">
            <IoReload className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <NavProducts />
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-white h-10 px-3 rounded-full transition-all duration-300 hover:ring-2 hover:ring-primary ring-offset-2 ring-offset-background"
          >
            <IoAdd className="size-4" />
            <span>Nuevo producto</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        <div className="xl:col-span-1">
          <div className="space-y-5">
            <CardTopSellingProducts />
            <PromoteCard
              title="Promociona los productos más vendidos"
              description="Incrementa tus ventas de los tenis Blanco con dorado lanzando una camapaña de marketing y dando ofertas inigualables"
              textButton="Promocionar producto"
            />
          </div>
        </div>
        <div className="xl:col-span-3">
          <div className="space-y-5">
            <ProductCards />
            <TableProductPerformance />
          </div>
        </div>
      </div>
    </div>
  );
}
