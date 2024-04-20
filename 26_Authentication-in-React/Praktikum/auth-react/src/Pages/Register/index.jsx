import { useState } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { PAGE_URL } from "../../Utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../store/slice/login.slice";
import { createUserWithEmailAndPassword } from "firebase/auth"; 

export default function Register() { 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleRegister = async (e) => { 
    e.preventDefault();
    setLoading(true); 
    try {
      const userData = await createUserWithEmailAndPassword( 
        auth,
        formData.email,
        formData.password
      );
      console.log(userData);
      toast.success("Registration successful!");
      toast.success("Welcome!");
      dispatch(setIsLogin(true));
      navigate(PAGE_URL.CREATEPRODUCT)
    } catch (error) {
      if (error.code === "auth/email-already-in-use") 
      toast.error("Email already in use!");
      console.error(error);
      dispatch(setIsLogin(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-login">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="card col-4 p-4 border-0 bg-transparent text-white">
          <h2 className="text-center mb-4 display-2 mb-5">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                aria-describedby="emailHelp"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-light col-12 mb-2" disabled={loading}>
                {loading ? "Registering..." : "Register"} 
              </button>
            </div>
          </form>
          <p>
            Already have an account? {" "} 
            <span>
              <Link to={PAGE_URL.LOGIN}>
                <button className="bg-transparent border-0 text-white">
                  <u>Login here</u>
                </button>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
