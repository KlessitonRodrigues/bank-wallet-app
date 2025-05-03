import {
  LabelError,
  Input,
  Label,
  InputDisplay,
} from "src/lib/base/form/inputs";
import { formatStr } from "src/utils/strings";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  mask?: string;
  maxLength?: number;
  max?: number;
  min?: number;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const NumberInput = (props: IInputField) => {
  const { name, mask, maxLength, onChangeValue } = props;
  const displayId = `ipt-display-${name || props?.input?.name}`;

  return (
    <Label>
      {props.label}
      <Input
        type="text"
        className="opacity-0"
        id={name}
        name={name}
        placeholder={props.placeholder}
        autoComplete={name}
        value={props.value}
        data-error={!!props.error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        onKeyDown={(ev: any) => {
          if (ev.key.length === 1) {
            if (ev.key.match(/[\D]/g)) ev.preventDefault();
            if (maxLength && ev.target.value?.length >= maxLength) {
              ev.preventDefault();
            }
          }
        }}
        onKeyUp={(ev: any) => {
          const ipt = document.getElementById(displayId);
          if (!ipt || !mask) return;
          ipt.innerText = formatStr(ev.target.value, mask);
        }}
        {...props.input}
      />
      <InputDisplay
        id={displayId}
        className="-mt-10"
        data-error={!!props.error}
      >
        {props.placeholder}
      </InputDisplay>
      <LabelError>{props.error}</LabelError>
    </Label>
  );
};

export default NumberInput;
