"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {IoTrendingDown, IoTrendingUp} from "react-icons/io5";
import {IconType} from "react-icons";

interface InfoCardProps {
  title: string;
  icon: IconType;
  value: string;
  text: string;
  trendPositive?: string;
  trendNegative?: string;
  trendText?: string;
}

export function InfoCard({
  title,
  icon: Icon,
  value,
  text,
  trendPositive,
  trendNegative,
  trendText = "vs el último mes"
}: InfoCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-2">
        <span className="flex items-center justify-center size-10 rounded-full border border-border">
          <Icon className="size-5" />
        </span>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <h3 className="text-3xl font-medium">{value}</h3>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
      <CardFooter>
        {trendPositive ? (
          <span className="bg-green-500/10 text-green-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
            <IoTrendingUp className="size-4" />
            {trendPositive}%
          </span>
        ) : (
          <span className="bg-red-500/10 text-red-500 flex items-center gap-2 rounded-full py-1 px-2 text-sm font-medium">
            <IoTrendingDown className="size-4" />
            {trendNegative}%
          </span>
        )}
        <p className="text-muted-foreground ml-2">{trendText}</p>
      </CardFooter>
    </Card>
  );
}
