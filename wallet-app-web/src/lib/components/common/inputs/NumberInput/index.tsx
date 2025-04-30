import {
  LabelError,
  Input,
  Label,
  InputDisplay,
} from "src/lib/base/form/inputs";
import { templateStr } from "src/utils/strings";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  mask?: string;
  length?: string;
  max?: string;
  min?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const NumberInput = (props: IInputField) => {
  const { name, label, placeholder, error, mask, input, value, onChangeValue } =
    props;

  return (
    <Label>
      {label}
      <Input
        type="text"
        className="opacity-0"
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        value={value}
        data-error={!!error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        onKeyUp={(ev: any) => {
          const ipt = document.getElementById(label || "");
          if (!ipt || !mask) return;
          ipt.innerText = templateStr(ev.target.value, mask);
        }}
        {...input}
      />
      <InputDisplay className="-mt-10" id={label} data-error={!!error}>
        {mask}
      </InputDisplay>
      <LabelError>{error}</LabelError>
    </Label>
  );
};

export default NumberInput;
