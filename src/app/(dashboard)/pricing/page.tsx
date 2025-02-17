import {PricingCard} from "@/components/ui-custom/cards/pricing-card";
import {Title} from "@/components/ui-custom/title";

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <Title>Elija el plan adecuado a sus necesidades</Title>
          <p className="text-muted-foreground text-sm">
            Desbloquea todas las funcionalidades de la plataforma.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <PricingCard
          title="Básico"
          description="El plan ideal para startups que están dando sus primeros pasos en el
          mundo de los negocios."
          price={19.99}
          features={[
            "Almacenamiento de datos en la nube 10GB",
            "Acceso total a las analíticas de ventas",
            "Soporte básico mediante ticket o email",
            "Gestionar hasta 50 clientes potenciales por mes",
            "Gestionar hasta 1,500 productos por mes",
            "Gestionar permisos y roles por usuario"
          ]}
          textButton="Plan actual"
          disabledButton={true}
        />
        <PricingCard
          title="Profesional"
          description="Desbloquee potentes herramientas e impulse su negocio con análisis completos."
          price={49.99}
          features={[
            "Análisis, informes y perspectivas avanzadas con filtros personalizados",
            "Almacenamiento de datos en la nube 50GB",
            "Acceso total a las analíticas de ventas",
            "Soporte básico mediante ticket o email",
            "Gestionar hasta 150 clientes potenciales por mes",
            "Gestionar hasta 5,000 productos por mes",
            "Gestionar permisos y roles por usuario",
            "Acceso a la aplicación móvil con todas las funciones",
            "Opciones avanzadas de almacenamiento y copia de seguridad de datos"
          ]}
        />
        <PricingCard
          title="Empresarial"
          description="Soluciones a medida diseñadas para el éxito y la escalabilidad de las empresas."
          price={79.99}
          features={[
            "Análisis, informes y perspectivas avanzadas con filtros personalizados",
            "Almacenamiento de datos en la nube 50GB",
            "Acceso total a las analíticas de ventas",
            "Soporte básico mediante ticket o email",
            "Gestionar clientes ilimitados potenciales por mes",
            "Gestionar productos ilimitados por mes",
            "Gestionar permisos y roles por usuario",
            "Acceso a la aplicación móvil con todas las funciones",
            "Opciones avanzadas de almacenamiento y copia de seguridad de datos"
          ]}
        />
      </div>
    </div>
  );
}
