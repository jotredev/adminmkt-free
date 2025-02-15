import {Title} from "@/components/ui-custom/title";
import {NavLeadsManagement} from "@/components/ui-custom/navs/nav-leads-management";
import {DatePickerWithPresets} from "@/components/ui-custom/date-picker";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
import {Chart1Leads} from "@/components/charts/charts-page-leads-management/chart1";

const data = [
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

import {
  IoCloudUploadOutline,
  IoReload,
  IoPeopleOutline,
  IoTrendingUp,
  IoTrendingDown,
  IoPersonOutline,
  IoServerOutline,
  IoCloudDownloadOutline,
  IoFilterOutline,
  IoArrowUpOutline
} from "react-icons/io5";

export default function LeadsManagement() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-2">
          <Title>Clientes potenciales</Title>
          <p className="text-muted-foreground text-sm">
            Siga y controle el rendimiento de sus clientes potenciales
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
      <NavLeadsManagement />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full border border-border">
              <IoPeopleOutline className="size-5" />
            </span>
            <CardTitle>Total de clientes</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <h3 className="text-3xl font-medium">2,500</h3>
            <p className="text-muted-foreground">clientes</p>
          </CardContent>
          <CardFooter>
            <span className="bg-green-500/10 text-green-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
              <IoTrendingUp className="size-4" />
              13.14%
            </span>
            <p className="text-muted-foreground ml-2">vs el último mes</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full border border-border">
              <IoPersonOutline className="size-5" />
            </span>
            <CardTitle>Clientes activos</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <h3 className="text-3xl font-medium">750</h3>
            <p className="text-muted-foreground">clientes activos</p>
          </CardContent>
          <CardFooter>
            <span className="bg-green-500/10 text-green-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
              <IoTrendingUp className="size-4" />
              4.14%
            </span>
            <p className="text-muted-foreground ml-2">vs el último mes</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full border border-border">
              <IoServerOutline className="size-5" />
            </span>
            <CardTitle>Tasa de crecimiento</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <h3 className="text-3xl font-medium">$14,500</h3>
            <p className="text-muted-foreground">incremento</p>
          </CardContent>
          <CardFooter>
            <span className="bg-red-500/10 text-red-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
              <IoTrendingDown className="size-4" />
              5.28%
            </span>
            <p className="text-muted-foreground ml-2">vs el último mes</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full border border-border">
              <IoPersonOutline className="size-5" />
            </span>
            <CardTitle>Nuevos clientes</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <h3 className="text-3xl font-medium">170</h3>
            <p className="text-muted-foreground">clientes nuevos</p>
          </CardContent>
          <CardFooter>
            <span className="bg-green-500/10 text-green-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
              <IoTrendingUp className="size-4" />
              2.18%
            </span>
            <p className="text-muted-foreground ml-2">vs el último mes</p>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
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
                    <TableHead className="text-right">
                      Últina conexión
                    </TableHead>
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
        </div>
        <div>
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <CardTitle>Tendencias en conversión</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Por mes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Por día</SelectItem>
                    <SelectItem value="week">Por semana</SelectItem>
                    <SelectItem value="month">Por mes</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="rotate-45 ">
                  <IoArrowUpOutline className="size-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Chart1Leads />
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                La conversión de clientes subio un 4.9% este mes{" "}
                <IoTrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Mostrando la tasa de conversión en los últimos 6 meses.
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
