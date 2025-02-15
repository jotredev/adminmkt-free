"use client";

import {InfoCard} from "@/components/ui-custom/cards/info-card";
import {IoCartOutline, IoCashOutline, IoCubeOutline} from "react-icons/io5";

export function ProductCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <InfoCard
        title="Total productos"
        icon={IoCubeOutline}
        value="1,800"
        text="Productos"
        trendPositive="8.99"
      />
      <InfoCard
        title="Ganancia por producto"
        icon={IoCartOutline}
        value="$1,100"
        text="Por productos"
        trendNegative="2.99"
      />
      <InfoCard
        title="Total ganancias"
        icon={IoCashOutline}
        value="$198,599"
        text="Ganancias"
        trendPositive="12.99"
      />
    </div>
  );
}
