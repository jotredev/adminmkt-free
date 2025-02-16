"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  IoChevronForwardCircleOutline,
  IoSparklesOutline
} from "react-icons/io5";

interface PromoteCardProps {
  title: string;
  description: string;
  textButton?: string;
}

export function PromoteCard({
  title,
  description,
  textButton = "Promocionar"
}: PromoteCardProps) {
  return (
    <Card className="bg-primary/10 dark:bg-background text-primary">
      <CardHeader className="grid grid-cols-6 gap-3">
        <span className="col-span-1 flex items-center justify-center size-10 rounded-full border border-border bg-primary text-white">
          <IoSparklesOutline className="size-5" />
        </span>
        <CardTitle className="col-span-5">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href="/"
          className="flex items-center justify-center w-full gap-2 bg-primary text-white h-14 px-3 rounded-full transition-all duration-300 hover:ring-2 hover:ring-primary ring-offset-2 ring-offset-background"
        >
          <span>{textButton}</span>
          <IoChevronForwardCircleOutline className="size-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
