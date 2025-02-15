"use client";

import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
const chartData = [
  {month: "Enero", clients: 170, conversion: 80},
  {month: "Febrero", clients: 305, conversion: 200},
  {month: "Marzo", clients: 237, conversion: 120},
  {month: "Abril", clients: 210, conversion: 190},
  {month: "Mayo", clients: 209, conversion: 130},
  {month: "Junio", clients: 214, conversion: 140}
];

const chartConfig = {
  clients: {
    label: "Clientes",
    color: "hsl(var(--chart-1))"
  },
  conversion: {
    label: "Conversión",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

export function Chart1Leads() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="clients"
          stackId="a"
          fill="var(--color-clients)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="conversion"
          stackId="a"
          fill="var(--color-conversion)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
