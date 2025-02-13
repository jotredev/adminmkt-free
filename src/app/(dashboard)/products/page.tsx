import {Title} from "@/components/ui-custom/title";

export default function ProductsPage() {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Title>Productos</Title>
          <p className="text-muted-foreground text-sm">
            Controle el rendimiento de sus productos, precios y existencias en
            un solo lugar.
          </p>
        </div>
      </div>
    </div>
  );
}
