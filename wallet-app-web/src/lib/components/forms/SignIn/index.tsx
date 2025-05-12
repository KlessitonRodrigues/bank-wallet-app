"use client";

import { useForm } from "react-hook-form";
import { ISignInForm, signInform } from "./form";
import { useMutation } from "react-query";
import { axiosClient } from "src/services/axiosClient";
import { Row } from "src/lib/base/containers/Flex";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { PiSignIn, PiUser } from "react-icons/pi";
import TextInput from "../../common/inputs/TextInput";
import { Form } from "src/lib/base/form/forms";
import PasswordInput from "../../common/inputs/PasswordInput";
import NumberInput from "../../common/inputs/NumberInput";
import CurrencyInput from "../../common/inputs/CurrencyInput";
import SelectorInput from "../../common/inputs/SelectorInput";

const SignInForm = (props: any) => {
  const { goAccountForm } = props;
  const { register, formState, ...form } = useForm(signInform);

  const onLogin = async (data: ISignInForm) => {
    return axiosClient.post("auth/sign-in", data);
  };

  const submitQuery = useMutation({ mutationFn: onLogin });

  const onSubmit = async (data: ISignInForm) => {
    const res = await submitQuery.mutateAsync(data);
    // setToken(res.data.token);
    setTimeout(() => (window.location.pathname = "/dashboard"), 1500);
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        placeholder="Digite o email"
        input={register("email")}
        error={formState.errors.email?.message}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite a senha"
        input={register("password")}
        error={formState.errors.password?.message}
      />
      <NumberInput
        label="Telefone"
        mask="(xx) xxxxx-xxxx"
        input={register("tel")}
        error={formState.errors.tel?.message}
      />
      <CurrencyInput
        label="Moeda"
        currency="R$"
        input={register("value")}
        error={formState.errors.value?.message}
      />
      <SelectorInput
        label="Tipo de usuario"
        placeholder="Selecionar"
        value=""
        onChangeValue={console.log}
        options={[
          { label: `Brazil`, value: `BRA` },
          { label: `United States`, value: `USA` },
          { label: `France`, value: `FRA` },
        ]}
        error={formState.errors.value?.message}
      />
      <Row>
        <ButtonBlue>
          <PiSignIn size={18} />
          Entrar
        </ButtonBlue>
        <ButtonOutline itemType="button" onClick={goAccountForm}>
          <PiUser size={18} />
          Criar nova conta
        </ButtonOutline>
      </Row>
    </Form>
  );
};

export default SignInForm;
