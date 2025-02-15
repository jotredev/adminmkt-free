import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {TrendingUpIcon} from "lucide-react";
import Image from "next/image";

import {
  IoArrowUpOutline,
  IoCloudDownloadOutline,
  IoFilterOutline
} from "react-icons/io5";

type TypeData = {
  id: number;
  product: {
    name: string;
    image: string;
    stock: number;
  };
  category: string;
  unitSold: number;
  revenue: number;
  conversion: number;
};

const data: TypeData[] = [
  {
    id: 1,
    product: {
      name: "Tenis blancos con dorado",
      image: "/images/products/product-1.webp",
      stock: 15
    },
    category: "Calzado",
    unitSold: 15,
    revenue: 1500,
    conversion: 15
  },
  {
    id: 2,
    product: {
      name: "Tenis morados",
      image: "/images/products/product-2.webp",
      stock: 45
    },
    category: "Calzado",
    unitSold: 12,
    revenue: 1100,
    conversion: 8
  },
  {
    id: 3,
    product: {
      name: "Tenis de colores",
      image: "/images/products/product-3.webp",
      stock: 14
    },
    category: "Calzado",
    unitSold: 25,
    revenue: 1800,
    conversion: 9
  },
  {
    id: 4,
    product: {
      name: "Tenis color cremita",
      image: "/images/products/product-4.webp",
      stock: 58
    },
    category: "Calzado",
    unitSold: 72,
    revenue: 4800,
    conversion: 4
  },
  {
    id: 5,
    product: {
      name: "Tenis blanco con rojo",
      image: "/images/products/product-5.webp",
      stock: 41
    },
    category: "Calzado",
    unitSold: 14,
    revenue: 800,
    conversion: 20
  }
];

export function TableProductPerformance() {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <CardTitle className="flex items-center gap-2">
            Rendimiento por producto
            <TrendingUpIcon />
          </CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos los estatus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Nuevo</SelectItem>
              <SelectItem value="inProgress">En progreso</SelectItem>
              <SelectItem value="converted">Convertido</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="">
            <IoCloudDownloadOutline className="size-5" />
          </Button>
          <Button variant="outline" size="icon" className="">
            <IoFilterOutline className="size-5" />
          </Button>
          <Button variant="outline" size="icon" className="rotate-45 ">
            <IoArrowUpOutline className="size-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Vendidos</TableHead>
              <TableHead>Ganancias</TableHead>
              <TableHead>Conversión</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium flex items-center gap-3">
                  <Image
                    src={item.product.image}
                    alt="Product image"
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-lg bg-cover"
                  />
                  {item.product.name}
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.unitSold}</TableCell>
                <TableCell>${item.revenue.toFixed(2)}</TableCell>
                <TableCell>{item.conversion}</TableCell>
                <TableCell className="text-right">
                  {item.product.stock}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
