"use client";

import {InfoCard} from "@/components/ui-custom/cards/info-card";
import {
  IoBarChartOutline,
  IoCashOutline,
  IoMegaphoneOutline,
  IoPersonOutline
} from "react-icons/io5";

export function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <InfoCard
        title="Campañas activas"
        icon={IoMegaphoneOutline}
        value="77"
        text="camapñas activas"
        trendPositive="5.9"
      />
      <InfoCard
        title="Ganancias"
        icon={IoCashOutline}
        value="$49.584"
        text="ganancias generadas"
        trendPositive="4.14"
      />
      <InfoCard
        title="Impresiones"
        icon={IoPersonOutline}
        value="489,548"
        text="total de impresiones"
        trendNegative="2.77"
      />
      <InfoCard
        title="Conversiones"
        icon={IoBarChartOutline}
        value="$5,689"
        text="tasa de conversión"
        trendPositive="8.88"
      />
    </div>
  );
}
