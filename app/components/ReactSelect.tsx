import { Controller, Control, FieldValues, Path } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

interface SelectOption {
  label: string;
  value: string | number;
}

interface ReactSelectProps<T extends FieldValues> {
  options: SelectOption[];
  control: Control<T>;
  rules?: object;
  placeholder: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  labelName: Path<T>;
  labelText: string;
  useValueAsLabel?: boolean;
  onChange?: (selectedOption: SelectOption | null) => void;
}

const customStyles = (
  padding: string,
  borderRadius: string,
  border: string
): StylesConfig<SelectOption, false> => ({
  control: (provided) => ({
    ...provided,
    width: "100%",
    borderShadow: "none",
    textAlign: "left",
    padding,
    boxShadow: provided.boxShadow,
    borderRadius,
    border,
    fontSize: "14px",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected
      ? "#F4E8E1"
      : state.isFocused
      ? "#ECF1F7"
      : "white",
    fontSize: "14px",
    lineHeight: "20px",
  }),
});

export default function ReactSelect<T extends FieldValues>({
  options,
  control,
  labelName,
  placeholder,
  padding = "10px",
  borderRadius = "none",
  border = "1px solid #8F8F8F",
  rules,
  labelText,
  useValueAsLabel = false,
  onChange,
}: ReactSelectProps<T>) {
  return (
    <div>
      <Controller
        control={control}
        name={labelName}
        rules={rules}
        render={({
          field: { onChange: onFieldChange, value },
          fieldState: { error },
        }) => (
          <>
            <p className="text-[#212121] text-base font-medium mb-1">
              {labelText}
            </p>
            <Select
              options={options}
              styles={customStyles(padding, borderRadius, border)}
              onChange={(selectedOption) => {
                if (useValueAsLabel && selectedOption) {
                  onFieldChange(selectedOption.label);
                } else {
                  onFieldChange(selectedOption);
                }
                onChange?.(selectedOption);
              }}
              value={
                typeof value === "object" && value !== null
                  ? value
                  : options.find((option) =>
                      useValueAsLabel
                        ? option.label === value
                        : option.value === value
                    ) || null
              }
              placeholder={placeholder}
            />
            {error?.message && (
              <p className="text-red-500 text-xs">{String(error?.message)}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
