"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {loginSchema} from "@/types/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export function FormLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "jotredev@gmail.com",
      password: "12345678"
    }
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      form.reset();
      router.push("/");
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-white">
                  Correo electrónico <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-[#1f1f1f] border-[#1f1f1f] text-white ring-offset-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-white">
                  Contraseña <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    className="bg-[#1f1f1f] border-[#1f1f1f] text-white ring-offset-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-10">
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} className="mr-2" spin />
          ) : (
            "Iniciar sesión"
          )}
        </Button>
      </form>
      <div className="mt-10">
        <p className="text-muted-foreground text-center">
          ¿No tienes una cuenta?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </Form>
  );
}
