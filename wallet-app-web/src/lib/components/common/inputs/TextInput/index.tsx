import { LabelError, Input, Label } from "src/lib/base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const TextInput = (props: IInputField) => {
  const { name, label, placeholder, error, input, value, onChangeValue } =
    props;

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
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        haserror={error}
        {...input}
      />
      <LabelError>{error}</LabelError>
    </Label>
  );
};

export default TextInput;
