import { TiTick } from "react-icons/ti";

const Button = ({ label, className }) => {
    return (
        <button className={`flex items-center gap-2 bg-[#FFFFFF] ${className}`}>
            <TiTick className="rounded-full bg-secondary " />
            {label}
        </button>
    )
}

export default Button