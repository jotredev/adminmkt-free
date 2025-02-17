"use client";

import {Label, PolarRadiusAxis, RadialBar, RadialBarChart} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
const chartData = [
  {year: "2025", socialMedia: 1260, emailMarketing: 570, facebookAds: 2500}
];

const chartConfig = {
  socialMedia: {
    label: "Redes sociales",
    color: "hsl(var(--chart-1))"
  },
  emailMarketing: {
    label: "Email marketing",
    color: "hsl(var(--chart-2))"
  },
  facebookAds: {
    label: "Facebook ADS",
    color: "hsl(var(--chart-3))"
  }
} satisfies ChartConfig;

export function ChartBudgetAllocation() {
  const totalVisitors =
    chartData[0].socialMedia +
    chartData[0].emailMarketing +
    chartData[0].facebookAds;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Asignación de presupuesto</CardTitle>
        <CardDescription>2025</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({viewBox}) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          ${totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Presupuesto total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="socialMedia"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-socialMedia)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="emailMarketing"
              fill="var(--color-emailMarketing)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="facebookAds"
              fill="var(--color-facebookAds)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <ul className="flex items-center flex-wrap gap-5">
          <li className="flex items-center gap-2">
            <span className="flex items-center justify-center w-3 h-3 rounded-full bg-chart-1" />
            Redes sociales
          </li>
          <li className="flex items-center gap-2">
            <span className="flex items-center justify-center w-3 h-3 rounded-full bg-chart-2" />
            Email marketing
          </li>
          <li className="flex items-center gap-2">
            <span className="flex items-center justify-center w-3 h-3 rounded-full bg-chart-3" />
            Facebook ADS
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
