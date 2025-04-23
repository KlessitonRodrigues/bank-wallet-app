import { useForm } from "react-hook-form";
import PasswordInput from "src/lib/base/inputs/PasswordInput";
import TextInput from "src/lib/base/inputs/TextInput";
import { ButtonMain, ButtonWhite } from "src/lib/base/styled/Buttons";
import { Row } from "src/lib/base/styled/Flex";
import { signUpform } from "./form";
import Text from "src/lib/base/common/Text";
import { Form } from "src/lib/base/styled/Forms";
import authService from "src/services/auth";
import toast from "react-hot-toast";
import { CardWhite } from "src/lib/base/styled/Card";
import { useMutation } from "react-query";
import SelectionInput from "src/lib/base/inputs/SelectionInput";
import { userRuleOptions } from "src/constants/dataOptions";
import NumberInput from "src/lib/base/inputs/NumberInput";

const SignUpForm = (props: Props.SignUpFormProps) => {
  const { goLoginForm } = props;
  const { register, formState, ...form } = useForm(signUpform);
  const submitQuery = useMutation({ mutationFn: authService.signUp });

  const onSubmit = async (data: Form.SignUp) => {
    await submitQuery.mutateAsync(data);
    toast.success("Nova conta criada com sucesso");
    goLoginForm?.();
  };

  return (
    <CardWhite p={8}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Text tag="h1" className="text-center">
          Criar Conta
        </Text>
        <NumberInput
          name="cpf"
          label="CPF"
          placeholder="Digite o número de CPF"
          input={register("cpf")}
          error={formState.errors.cpf?.message}
        />
        <TextInput
          name="name"
          label="Nome"
          placeholder="Digite o nome de usuário"
          input={register("name")}
          error={formState.errors.name?.message}
        />
        <TextInput
          name="email"
          label="Email"
          placeholder="Digite o email"
          input={register("email")}
          error={formState.errors.email?.message}
        />
        <PasswordInput
          name="password"
          label="Senha"
          placeholder="Digite a senha"
          input={register("password")}
          error={formState.errors.password?.message}
        />
        <PasswordInput
          name="confirmPassword"
          label="Senha de confirmação"
          placeholder="Digite a senha de confirmação"
          input={register("confirmPassword")}
          error={formState.errors.confirmPassword?.message}
        />
        <SelectionInput
          name="rule"
          label="Tipo (test only)"
          placeholder="Selecione o tipo de usuário"
          error={formState.errors.rule?.message}
          onChange={(option) => form.setValue("rule", option.value)}
          options={userRuleOptions}
        />
        <Row center>
          <ButtonMain>Criar conta</ButtonMain>
          <ButtonWhite type="button" onClick={goLoginForm}>
            Usar uma conta
          </ButtonWhite>
        </Row>
      </Form>
    </CardWhite>
  );
};

export default SignUpForm;
