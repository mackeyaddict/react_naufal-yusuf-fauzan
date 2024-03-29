import Button from "../../Components/Button";
import { PAGE_URL } from "../../Utils/Constant";
import HeroImage from "../../assets/Img/hero-img.png"
import { Link } from "react-router-dom";


export default function HomeBanner() {
  return (
    <section>
      <div className="bg-gradient-to-t from-black to-white h-[calc(100vh-96px)] flex justify-center">
        <div className="container mx-auto px-4 md:grid md:grid-cols-2 py-14">
          <div className="flex flex-col justify-center gap-4 text-white">
            <h2 className="text-4xl font-semibold">Welcome To</h2>
            <h1 className="text-5xl font-bold">Homie Coffee House</h1>
            <p className="text-base leading-relaxed max-w-[500px]">Your gateway to delightful coffee experiences. From the first aroma to the last sip, we&rsquo;re here to elevate your coffee journey.</p>
            <div className="max-w-36">
              <Link to={PAGE_URL.ABOUT}>              
                <Button>About Us</Button>
              </Link>
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden">
            <img src={HeroImage} alt="" className=" rounded-tl-[200px] rounded-br-[200px] rounded-tr-3xl rounded-bl-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}