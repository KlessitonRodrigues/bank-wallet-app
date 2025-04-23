import Select from "react-select";
import { ErrorLabel, Label } from "../../styled/Inputs";

const SelectionInput = (props: Props.SelectionField) => {
  const { label, placeholder, error, options, onChange } = props;

  return (
    <Label>
      {label}
      <Select
        className={`react-selector ${error ? "error" : ""}`}
        classNamePrefix="react-selector"
        closeMenuOnSelect
        isClearable
        placeholder={placeholder}
        options={options}
        onChange={(option) => {
          const value = { value: "", label: "", ...option };
          onChange && onChange(value);
        }}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default SelectionInput;
