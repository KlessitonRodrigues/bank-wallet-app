import { ErrorLabel, Input, Label } from "src/lib/base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  onChange?: (value: string) => void;
};

const TextInput = (props: IInputField) => {
  const { name, label, placeholder, error, input, value, onChange } = props;

  return (
    <Label>
      {label}
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        value={value}
        className={`${error && "border-default-red"}`}
        onChange={(ev: any) => onChange?.(ev.target?.value)}
        {...input}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default TextInput;
