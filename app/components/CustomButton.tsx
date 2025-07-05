interface ButtonProps {
  name: string;
  buttonStyle?: string;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
export default function CustomButton({
  name,
  buttonStyle,
  onClick,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyle} gap-4 p-4 rounded-md cursor-pointer font-medium`}
      {...props}
      onClick={onClick}
    >
      {iconLeft}
      {name}
      {iconRight}
    </button>
  );
}
