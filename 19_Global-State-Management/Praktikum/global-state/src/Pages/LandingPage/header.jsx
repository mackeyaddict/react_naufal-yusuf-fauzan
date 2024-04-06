import { Link } from "react-router-dom";
import Button from "../../Components/button";
import { PAGE_URL } from "../../Utils/constant";
import HeroImage from '../../assets/hero-img.png'
import '../../App.css'

export default function Header() {
  return (
    <section className="hero text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col left-hero">
            <h1 className="mb-4">Better Solutions For Your <br/> Business</h1>
            <p className="mb-4">We are a team of talented designers making websites with <br/> Bootstrap</p>
            <div className="d-flex">
              <Link to={PAGE_URL.CREATEPRODUCT}>
                <Button variant="primary">Create Product</Button>
              </Link>
              <Link to={PAGE_URL.HOME}>
                <Button variant="secondary">Watch Video</Button>
              </Link>
            </div>
          </div>
          <div className="col right-hero">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
