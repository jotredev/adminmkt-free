"use client";

import {InfoCard} from "@/components/ui-custom/cards/info-card";
import {
  IoCartOutline,
  IoCashOutline,
  IoCubeOutline,
  IoReturnUpBackOutline
} from "react-icons/io5";

export function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <InfoCard
        icon={IoCashOutline}
        title="Ventas"
        value="$59.658"
        text="ventas totales"
        trendPositive="7.89"
      />
      <InfoCard
        icon={IoCartOutline}
        title="Ordenes"
        value="1,789"
        text="ordenes totales"
        trendPositive="1.49"
      />
      <InfoCard
        icon={IoCubeOutline}
        title="Promedio"
        value="$45.89"
        text="promedio por orden"
        trendNegative="2.89"
      />
      <InfoCard
        icon={IoReturnUpBackOutline}
        title="Devoluciones"
        value="$12,345"
        text="devoluciones totales"
        trendNegative="4.78"
      />
    </div>
  );
}
