"use client";

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
import {Chart1Leads} from "@/components/charts/charts-page-leads-management/chart1";

import {IoTrendingUp, IoArrowUpOutline} from "react-icons/io5";
import {Button} from "@/components/ui/button";

export function ConversionTrends() {
  return (
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
  );
}
