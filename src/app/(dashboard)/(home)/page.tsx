import {Title} from "@/components/ui-custom/title";

export default function HomePage() {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Title>Dashboard</Title>
          <p className="text-muted-foreground text-sm">
            Información en gráficas sobre su rendimiento.
          </p>
        </div>
      </div>
    </div>
  );
}
