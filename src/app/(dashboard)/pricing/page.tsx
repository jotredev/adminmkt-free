import {Title} from "@/components/ui-custom/title";

export default function PricingPage() {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <Title>Elija el plan adecuado a sus necesidades</Title>
          <p className="text-muted-foreground text-sm">
            Desbloquea todas las funcionalidades de la plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
