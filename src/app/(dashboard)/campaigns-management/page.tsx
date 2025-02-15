import {CampaignsTable} from "@/components/pages/campaigns-management/campaigns-table";
import {Cards} from "@/components/pages/campaigns-management/cards";
import {DatePickerWithPresets} from "@/components/ui-custom/date-picker";
import {Title} from "@/components/ui-custom/title";
import {Button} from "@/components/ui/button";

import {IoCloudUploadOutline, IoReload} from "react-icons/io5";

export default function CampaignsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="space-y-2">
          <Title>Gestor de campañas</Title>
          <p className="text-muted-foreground text-sm">
            Gestione sus camapañas de marketing.
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
      <Cards />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-5">
        <div className="xl:col-span-4">
          <CampaignsTable />
        </div>
        <div className="xl:col-span-2"></div>
      </div>
    </div>
  );
}
