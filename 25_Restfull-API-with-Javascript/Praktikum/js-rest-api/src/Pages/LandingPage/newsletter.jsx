import { Link } from "react-router-dom"; 

export default function Newsletter() {
  return (
    <section className="nl-foot">
      <div className="container">
        <div className="row justify-center align-items-center text-center">
          <h2>Join Our Newsletter</h2>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <div className="input-group d-flex align-items-center justify-content-center">
            <input type="text" name="" id="" />
            <Link to="createProduct.html">
              <button className="btn btn-lg btn-primary rounded-pill btn-subs">Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
