import {FormLogin} from "@/components/forms/form-login";
import {Button} from "@/components/ui/button";
import {faApple, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function LoginPage() {
  return (
    <div className="w-full lg:w-[600px] h-full lg:h-auto mx-auto bg-black rounded-3xl p-10 shadow-xl">
      <div className="space-y-2 mb-8 pt-8">
        <h1 className="text-4xl text-white text-center font-bold">
          Admin<span className="text-primary">MKT</span>
        </h1>
        <h2 className="text-lg text-white text-center">Iniciar sesión</h2>
        <p className="text-muted-foreground text-center">
          Acceda a su panel de control y controle hoy mismo sus clientes
          potenciales, campañas y ventas.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 mb-10">
        <Button
          variant="outline"
          className="rounded-full w-full bg-[#1f1f1f] text-white border-[#1f1f1f]"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2 text-primary" />
          Continuar con Google
        </Button>
        <Button
          variant="outline"
          className="rounded-full w-full bg-[#1f1f1f] text-white border-[#1f1f1f]"
        >
          <FontAwesomeIcon icon={faApple} className="mr-2 text-primary" />
          Continuar con Apple
        </Button>
      </div>
      <div className="relative mb-10">
        <p className="text-muted-foreground text-center relative z-10 bg-black w-fit mx-auto px-5">
          O continuar con correo electrónico
        </p>
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-muted-foreground" />
      </div>
      <FormLogin />
    </div>
  );
}
