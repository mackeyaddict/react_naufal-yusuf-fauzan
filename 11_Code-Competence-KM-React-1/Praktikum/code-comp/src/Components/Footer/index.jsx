import { Link } from "react-router-dom";
import Logo from "../../assets/Img/logo.png"
import {FaWhatsapp,  FaLocationArrow, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const info = [
    {
      liteAddress: "Jl. Sirojul Munir",
      fullAdress: "RT.003/RW.001, Jatisari, Kec. Jatiasih, Kota Bks, Jawa Barat 17426",
      phoneNumber: "0822-6122-187"
    }
  ]

  const legal = ["Privacy Policy", "Terms & Conditions"]
  return(
    <section>
      <div className="container mx-auto grid grid-cols-4  gap-[56px] px-4 py-14">
        <div className="flex flex-col col-span-2 gap-8">
          <div className="flex gap-2 items-center cursor-pointer">
            <div className="max-w-24">
              <img src={Logo} alt="" />
            </div>
          </div> 
          <p className="text-[#1E2832BF] opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className="flex gap-[36px] ">
            <Link to="https://web.facebook.com/profile.php?id=100006369528556">            
              <button><FaFacebook size={25} /></button>
            </Link>
            <Link to="">
              <button><FaTwitter size={25}/></button>
            </Link>
            <Link to="https://www.linkedin.com/in/naufal-yusuf-20n">
              <FaLinkedinIn size={25}/>
            </Link>
            <Link to="https://www.instagram.com/nopalyusuff/">            
              <FaInstagram size={25}/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base font-semibold">More Information</p>
          {info.map((info, index) => (
            <ul key={index} className="flex flex-col gap-[12px]">
              <li className="flex gap-2 items-center"><FaLocationArrow size={20} /> {info.liteAddress}</li>
              <li className="flex gap-3 items-center"><FaLocationArrow size={20} color="white" /> {info.fullAdress}</li>
              <li className="flex gap-2 items-center"><FaWhatsapp size={25} />{info.phoneNumber}</li>
            </ul>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base font-semibold">Legal</p>
          {legal.map((legal, index) => (
            <ul key={index} className="flex flex-col gap-[12px]">
              <li>{legal}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="container mx-auto pb-4">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <p className="block text-sm text-gray-400 text-center">© 2024 Homie Coffee House. All Rights Reserved.</p>
      </div>
    </section>
  )
}