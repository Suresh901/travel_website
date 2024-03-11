import { TiTick } from "react-icons/ti";

const Button = ({ label, className }) => {
  return (
    <button
      className={`flex items-center gap-2 bg-[#FFFFFF] rounded-md ${className} text-sm md:text-[16px] lg:text-[16px] xl:text-[20px]`}
    >
      <TiTick className="rounded-full bg-secondary " />
      {label}
    </button>
  );
};

export default Button;
