import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo.png";
import { PAGE_URL } from "../../Utils/Constant";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const navList = ["Home", "About", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky">
      <div className="container mx-auto flex justify-between items-center h-24 px-4">
        <Link to={PAGE_URL.HOME}>
          <button className="max-w-24">
            <img src={logo} alt="" />
          </button>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-4 cursor-pointer">
            {navList.map((item, i) => (
              <li
                key={i}
                className="text-lg font-semibold hover:bg-black hover:text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out"
              >
                <Link to={PAGE_URL[item.toUpperCase()]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center gap-4">
            {navList.map((item, i) => (
              <li
                key={i}
                className="text-lg font-semibold hover:bg-black hover:text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out"
              >
                <Link to={PAGE_URL[item.toUpperCase()]} onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
