import {Title} from "@/components/ui-custom/title";
import {NavLeadsManagement} from "@/components/ui-custom/navs/nav-leads-management";
import {DatePickerWithPresets} from "@/components/ui-custom/date-picker";
import {Button} from "@/components/ui/button";

import {Cards} from "@/components/pages/leads-management/cards";
import {RecentActivity} from "@/components/pages/leads-management/recent-activity";
import {ConversionTrends} from "@/components/pages/leads-management/conversion-trends";

import {IoCloudUploadOutline, IoReload} from "react-icons/io5";

export default function LeadsManagement() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-2">
          <Title>Clientes potenciales</Title>
          <p className="text-muted-foreground text-sm">
            Siga y controle el rendimiento de sus clientes potenciales
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DatePickerWithPresets />
          <Button size="sm" variant="outline" className="border-none">
            <IoCloudUploadOutline className="size-5" /> Exportar
          </Button>
          <Button size="icon" variant="outline" className="border-none">
            <IoReload className="size-5" />
          </Button>
        </div>
      </div>
      <NavLeadsManagement />
      <Cards />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <RecentActivity />
        </div>
        <div>
          <ConversionTrends />
        </div>
      </div>
    </div>
  );
}
