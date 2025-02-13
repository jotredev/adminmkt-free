"use client";

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
import {registerSchema} from "@/types/auth";
import Link from "next/link";

export function FormRegister() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({field}) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Nombre (s) <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jorge Luis"
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
              name="lastName"
              render={({field}) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Apellidos <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Trejo Payan"
                      className="bg-[#1f1f1f] border-[#1f1f1f] text-white ring-offset-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
          Crear cuenta
        </Button>
      </form>
      <div className="mt-10">
        <p className="text-muted-foreground text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Ingresa aquí
          </Link>
        </p>
      </div>
    </Form>
  );
}
