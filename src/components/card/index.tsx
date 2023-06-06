import Button from "@/components/button";

type CardProps = {
  title: string;
  className: string;
  image: any;
};

export default function Card({ className, title, image }: CardProps) {
  return (
    <div
      className={`flex flex-col w-96 h-72 items-center justify-center rounded-md ${className} gap-4`}
    >
      <div className="flex items-center justify-center">
      {image}
      </div>
      <span className="text-2xl text-light-0 font-bold">{title}</span>
      <Button
        label="Ver funcionalidades"
        className="bg-white hover:bg-gray-100"
        labelClassName="text-primary-0 font-bold text-md"
        path="/contact"
      />
    </div>
  );
}
