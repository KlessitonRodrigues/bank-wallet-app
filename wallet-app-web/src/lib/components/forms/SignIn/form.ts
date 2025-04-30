import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

export type ISignInForm = {
  email?: string;
  password?: string;
  tel?: string;
  value?: string;
};

const values: ISignInForm = {
  email: "",
  password: "",
  tel: "",
  value: "",
};

const resolver: Resolver<ISignInForm> = async (data, ctx, opt) => {
  const schema: Utils.ZodSchema<typeof data> = {};

  schema.email = z
    .string()
    .nonempty("Email é obrigatório")
    .email("Formato inválido");

  schema.password = z.string().nonempty("Senha é obrigatório");

  schema.tel = z.string().nonempty("obrigatório");
  schema.value = z.string().nonempty("obrigatório");

  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const signInform = {
  values,
  resolver,
};
