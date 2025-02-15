"use client";

import {InfoCard} from "@/components/ui-custom/cards/info-card";
import {
  IoPeopleOutline,
  IoPersonOutline,
  IoServerOutline
} from "react-icons/io5";

export function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <InfoCard
        title="Total de clientes"
        icon={IoPeopleOutline}
        value="2,500"
        text="clientes"
        trendPositive="13.14"
      />
      <InfoCard
        title="Clientes activos"
        icon={IoPersonOutline}
        value="750"
        text="clientes activos"
        trendPositive="4.14"
      />
      <InfoCard
        title="Crecimiento"
        icon={IoServerOutline}
        value="750"
        text="tasa de crecimiento"
        trendNegative="5.28"
      />
      <InfoCard
        title="Nuevos clientes"
        icon={IoPersonOutline}
        value="170"
        text="clientes nuevos"
        trendPositive="2.18"
      />
    </div>
  );
}
