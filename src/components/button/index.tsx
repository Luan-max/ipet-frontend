type ButtonProps = {
  label: string;
  className?: string;
  labelClassName?: string;
};

export default function Button({
  label,
  className = "bg-gradient-to-r from-blue-500 to-cyan-500",
  labelClassName = "text-white text-sm font-bold",
}: ButtonProps) {
  return (
    <button className={`w-60 h-12 rounded-lg ${className}`}>
      <span className={labelClassName}>{label}</span>
    </button>
  );
}
