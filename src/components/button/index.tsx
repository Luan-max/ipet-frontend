import Link from "next/link";

type ButtonProps = {
  label: string;
  className?: string;
  labelClassName?: string;
  path: string;
};

export default function Button({
  label,
  className = "bg-gradient-to-r from-blue-500 to-cyan-500 ",
  labelClassName = "text-white text-sm font-bold",
  path = "#",
}: ButtonProps) {
  return (
    <Link
      href={path}
      className={`transform hover:scale-110 transition duration-500 ease-in-out w-60 h-12 rounded-lg flex items-center justify-center ${className} `}
    >
      <span className={labelClassName}>{label}</span>
    </Link>
  );
}
