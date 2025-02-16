"use client";

import {Badge} from "@/components/ui/badge";
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
  id: number;
  name: string;
  status: string;
  channel: string;
  startDate: string;
  endDate: string;
  impressions: string;
  revenue: string;
};

const data: TypeData[] = [
  {
    id: 1,
    name: "Black Friday",
    status: "active",
    channel: "Email Marketing",
    startDate: "23 nov, 2024",
    endDate: "29 nov, 2024",
    impressions: "120,000",
    revenue: "$45,000"
  },
  {
    id: 2,
    name: "Cyber Monday",
    status: "completed",
    channel: "Redes Sociales",
    startDate: "30 nov, 2024",
    endDate: "02 dic, 2024",
    impressions: "100,000",
    revenue: "$35,000"
  },
  {
    id: 3,
    name: "Navidad Descuentos",
    status: "active",
    channel: "Publicidad Display",
    startDate: "10 dic, 2024",
    endDate: "25 dic, 2024",
    impressions: "150,000",
    revenue: "$60,000"
  },
  {
    id: 4,
    name: "Rebajas Año Nuevo",
    status: "programmed",
    channel: "Email Marketing",
    startDate: "28 dic, 2024",
    endDate: "05 ene, 2025",
    impressions: "80,000",
    revenue: "$30,000"
  },
  {
    id: 5,
    name: "San Valentín",
    status: "programmed",
    channel: "Redes Sociales",
    startDate: "01 feb, 2025",
    endDate: "15 feb, 2025",
    impressions: "70,000",
    revenue: "$25,000"
  },
  {
    id: 6,
    name: "Día de la Mujer",
    status: "programmed",
    channel: "Publicidad Display",
    startDate: "01 mar, 2025",
    endDate: "10 mar, 2025",
    impressions: "90,000",
    revenue: "$35,000"
  },
  {
    id: 7,
    name: "Semana Santa",
    status: "completed",
    channel: "Email Marketing",
    startDate: "20 mar, 2024",
    endDate: "30 mar, 2024",
    impressions: "110,000",
    revenue: "$40,000"
  },
  {
    id: 8,
    name: "Día del Trabajo",
    status: "programmed",
    channel: "Redes Sociales",
    startDate: "20 abr, 2025",
    endDate: "01 may, 2025",
    impressions: "50,000",
    revenue: "$15,000"
  },
  {
    id: 9,
    name: "Verano Ofertas",
    status: "active",
    channel: "Publicidad Display",
    startDate: "01 jun, 2024",
    endDate: "30 jun, 2024",
    impressions: "130,000",
    revenue: "$55,000"
  },
  {
    id: 10,
    name: "Back to School",
    status: "completed",
    channel: "Email Marketing",
    startDate: "15 jul, 2024",
    endDate: "01 sep, 2024",
    impressions: "90,000",
    revenue: "$35,000"
  }
];

export function CampaignsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <CardTitle>Camapañas activas</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos los estatus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pendiente</SelectItem>
              <SelectItem value="inProgress">En progreso</SelectItem>
              <SelectItem value="completed">Completada</SelectItem>
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
              <TableHead className="w-[200px]">Nombre</TableHead>
              <TableHead className="w-[200px]">Canal</TableHead>
              <TableHead className="w-[200px]">Fecha inicio</TableHead>
              <TableHead className="w-[200px]">Fecha termino</TableHead>
              <TableHead>Impresiones</TableHead>
              <TableHead>Ganancias</TableHead>
              <TableHead>Estatus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.channel}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                  <TableCell>{item.impressions}</TableCell>
                  <TableCell className="font-medium">{item.revenue}</TableCell>
                  <TableCell>
                    {item.status === "programmed" ? (
                      <Badge
                        variant="outline"
                        className="border-blue-500 text-blue-500"
                      >
                        Programada
                      </Badge>
                    ) : item.status === "active" ? (
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-500"
                      >
                        Activa
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-500"
                      >
                        Completada
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
