import '../App.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="links-foot d-flex">
          <div>
            <h3 className="company">ARSHA</h3>
            <p>A108 Adam Street <br /> New York, NY 535022 <br /> United Sates</p>
            <p><b>Phone: </b>+1 5589 55488 55</p>
            <p><b>Email: </b>info@example.com</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul className="links-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul className="links-list">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Social Networks</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-icons">
              <div className="ellipse"></div>
              <div className="ellipse"></div>
              <div className="ellipse"></div>
              <div className="ellipse"></div>
              <div className="ellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-foot d-flex align-items-center'>
        <div className='container'>
          <div className="d-flex justify-content-between align-items-center">
            <p>&copy; Copyright <b>Arsha</b>. All Rights Reserved</p>
            <p>Designed by <span className="designed">BootstrapMade</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
