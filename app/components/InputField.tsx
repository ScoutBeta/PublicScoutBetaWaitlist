import { FieldErrors } from "react-hook-form";
interface InputFieldProps {
  type: string;
  placeholder: string;
  labelName: string;
  labelText: string;
  value?: string;
  errors?: FieldErrors;
  readOnly?: boolean;
}
export default function InputField({
  type,
  placeholder,
  labelName,
  labelText,
  errors,
  value,
  readOnly,
  ...props
}: InputFieldProps) {
  console.log(errors, "this is errors here===");
  return (
    <div>
      <label
        htmlFor={labelName}
        className="text-[#212121] text-base font-medium"
      >
        {labelText}
      </label>
      <div className="border border-[#8F8F8F] bg-[#F5F5F5] rounded-md mt-1">
        <input
          {...props}
          type={type}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          className={`${
            readOnly === true
              ? "cursor-not-allowed bg-slate-100"
              : "cursor-text"
          } px-3 py-3 focus:outline-none placeholder:text-sm  flex justify-between w-full text-[#212121] rounded-md`}
        />
      </div>
      {errors?.[labelName]?.message && (
        <p className="text-red-500 text-xs">
          {errors[labelName]?.message as string}
        </p>
      )}
    </div>
  );
}
