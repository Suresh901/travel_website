const Button = ({ label, className }) => {
  return (
    <button
      className={`p-2 md:p-4 font-bold bg-brand text-white rounded-md text-[16px] ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
