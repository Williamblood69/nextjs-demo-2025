import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-2 h-[124px]">
      <AiOutlineProduct color="rgb(255, 255, 255)" fontSize="40px" />
      <span className="text-neutral-50 text-4xl font-bold text-center">Product</span>
    </div>
  );
}
