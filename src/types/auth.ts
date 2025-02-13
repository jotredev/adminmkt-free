import {z} from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "El nombre debe contener al menos 2 caracteres"
    })
    .max(50),
  lastName: z
    .string()
    .min(2, {
      message: "El apellido debe contener al menos 2 caracteres"
    })
    .max(50),
  email: z.string().email({
    message: "Correo electrónico no es válido"
  }),
  password: z.string().min(8, {
    message: "La contraseña debe contener al menos 8 caracteres"
  })
});

export const loginSchema = z.object({
  email: z.string().email({
    message: "Correo electrónico no es válido"
  }),
  password: z.string().min(8, {
    message: "La contraseña debe contener al menos 8 caracteres"
  })
});
