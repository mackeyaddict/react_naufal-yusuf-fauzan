import { signOut } from "firebase/auth";
import { } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { PAGE_URL } from "../Utils/constant";
import { setIsLogin } from "../store/slice/login.slice";
import { toast } from "react-toastify";

export default function Navbar() {
  const isLogin = useSelector((state) => state.login.isLogin)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(PAGE_URL.LOGIN)
      dispatch(setIsLogin(false))
      toast.success("Logout successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top shadow-lg">
      <div className="container-fluid">
        <Link to={PAGE_URL.HOME}>        
          <button className="navbar-brand fw-bold border-0 bg-transparent" href="#">
            Simple Header
          </button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link to={PAGE_URL.HOME}>              
                <button
                  className="nav-link mx-2 active  btn btn-primary btn-home text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                About
              </a>
            </li>
            {isLogin ? (
              <li className="nav-item">
                <button className="btn btn-light mx-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login">
                  <button className="btn btn-light mx-2">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}