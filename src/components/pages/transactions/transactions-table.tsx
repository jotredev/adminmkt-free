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
  date: string;
  customer: string;
  status: string;
  amount: string;
  email: string;
  phone: string;
};

const data: TypeData[] = [
  {
    id: 1,
    date: "12 dic, 2024",
    customer: "John Doe",
    status: "pending",
    amount: "$100.00",
    email: "jhon@gmail.com",
    phone: "(+52) 123 456 7890"
  },
  {
    id: 2,
    date: "14 dic, 2024",
    customer: "Antonio Perez",
    status: "pending",
    amount: "$150.00",
    email: "antony@gmail.com",
    phone: "(+52) 123 466 7890"
  },
  {
    id: 3,
    date: "17 dic, 2024",
    customer: "Karla Dominguez",
    status: "inProgress",
    amount: "$180.00",
    email: "karla@gmail.com",
    phone: "(+52) 123 456 8890"
  },
  {
    id: 4,
    date: "20 dic, 2024",
    customer: "Luis Fernandez",
    status: "completed",
    amount: "$200.00",
    email: "luis@gmail.com",
    phone: "(+52) 123 455 7890"
  },
  {
    id: 5,
    date: "22 dic, 2024",
    customer: "Andrea Castillo",
    status: "refunded",
    amount: "$75.00",
    email: "andrea@gmail.com",
    phone: "(+52) 123 476 7890"
  },
  {
    id: 6,
    date: "24 dic, 2024",
    customer: "Miguel Santos",
    status: "pending",
    amount: "$250.00",
    email: "miguel@gmail.com",
    phone: "(+52) 123 478 7890"
  },
  {
    id: 7,
    date: "27 dic, 2024",
    customer: "Sofia Ramirez",
    status: "completed",
    amount: "$300.00",
    email: "sofia@gmail.com",
    phone: "(+52) 123 479 7890"
  },
  {
    id: 8,
    date: "29 dic, 2024",
    customer: "Fernando Lopez",
    status: "inProgress",
    amount: "$400.00",
    email: "fernando@gmail.com",
    phone: "(+52) 123 489 7890"
  },
  {
    id: 9,
    date: "31 dic, 2024",
    customer: "Isabela Torres",
    status: "refunded",
    amount: "$120.00",
    email: "isabela@gmail.com",
    phone: "(+52) 123 499 7890"
  },
  {
    id: 10,
    date: "02 ene, 2025",
    customer: "Diego Martinez",
    status: "completed",
    amount: "$500.00",
    email: "diego@gmail.com",
    phone: "(+52) 123 509 7890"
  }
];

export function TransactionsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <CardTitle>Últimas 10 transacciones</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todos los estatus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pendiente</SelectItem>
              <SelectItem value="inProgress">En progreso</SelectItem>
              <SelectItem value="refuned">Devuelto</SelectItem>
              <SelectItem value="completed">Completado</SelectItem>
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
              <TableHead>ID</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="w-[180px]">Cliente</TableHead>
              <TableHead>Estatus</TableHead>
              <TableHead>Importe</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Número</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium">{item.date}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>
                    {item.status === "pending" ? (
                      <Badge
                        variant="outline"
                        className="border-yellow-500 text-yellow-500"
                      >
                        Pendiente
                      </Badge>
                    ) : item.status === "inProgress" ? (
                      <Badge
                        variant="outline"
                        className="border-blue-500 text-blue-500"
                      >
                        En progreso
                      </Badge>
                    ) : item.status === "refunded" ? (
                      <Badge
                        variant="outline"
                        className="border-red-500 text-red-500"
                      >
                        Devuelto
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-500"
                      >
                        Convertido
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{item.amount}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
