import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {IoShieldCheckmarkOutline, IoCheckmarkCircle} from "react-icons/io5";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  textButton?: string;
  disabledButton?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  textButton = "Seleccionar",
  disabledButton = false
}: PricingCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-5">
        <IoShieldCheckmarkOutline className="size-8" />
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-5xl">${price}</h2>
          <p>/ mes</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <IoCheckmarkCircle className="size-5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={disabledButton}>
          {textButton}
        </Button>
      </CardFooter>
    </Card>
  );
}
