import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-8 p-2">
      <div className="bg-[#ededed] w-10 h-10 rounded-full flex items-center justify-center">
        <FaFacebook size={20} />
      </div>
      <div className="bg-[#ededed] w-10 h-10 rounded-full flex items-center justify-center">
        <FaTwitter size={20} />
      </div>
      <div className="bg-[#ededed] w-10 h-10 rounded-full flex items-center justify-center">
        <FaInstagram size={20} />
      </div>
      <div className="bg-[#ededed] w-10 h-10 rounded-full flex items-center justify-center">
        <FaPinterest size={20} />
      </div>
    </div>
  );
};

export default Logo;
