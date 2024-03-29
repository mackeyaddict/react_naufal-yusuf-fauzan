export default function Button({ children, variant = "primary", icon }) {
  const variants = {
    primary: 'bg-black text-white hover:bg-white hover:text-black',
    secondary: 'bg-white text-[#000000] hover:bg-black hover:text-white'
  };

  return (
    <div>
      <button className={`px-4 py-2 font-bold text-white rounded-lg flex gap-2 items-center ${variants[variant]}`}>
        {icon && <img src={icon} alt="icon" className="mr-2 h-4 w-4" />}
        {children}
      </button>
    </div>
  );
}
