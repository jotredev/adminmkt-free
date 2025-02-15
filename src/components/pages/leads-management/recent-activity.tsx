"use client";

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
import {
  IoArrowUpOutline,
  IoCloudDownloadOutline,
  IoFilterOutline
} from "react-icons/io5";

type TypeData = {
  name: string;
  source: string;
  status: string;
  date: string;
};

const data: TypeData[] = [
  {
    name: "Martín Salgado",
    source: "Email Marketing",
    status: "En progreso",
    date: "15 dic, 2024"
  },
  {
    name: "Alondra Bustamante",
    source: "Redes Sociales",
    status: "Convertido",
    date: "16 ene, 2025"
  },
  {
    name: "Luis Parra",
    source: "Email Marketing",
    status: "Nuevo",
    date: "23 jun, 2024"
  },
  {
    name: "Antonio López",
    source: "Email Marketing",
    status: "En progreso",
    date: "11 dic, 2024"
  },
  {
    name: "Juana Pérez",
    source: "Redes Sociales",
    status: "Convertido",
    date: "18 ene, 2025"
  },
  {
    name: "María Rodríguez",
    source: "Email Marketing",
    status: "Nuevo",
    date: "25 jun, 2024"
  },
  {
    name: "José Hernández",
    source: "Email Marketing",
    status: "En progreso",
    date: "17 dic, 2024"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <CardTitle>Actividad reciente</CardTitle>
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
              <TableHead className="w-[180px]">Nombre</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Estatus</TableHead>
              <TableHead className="text-right">Últina conexión</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
