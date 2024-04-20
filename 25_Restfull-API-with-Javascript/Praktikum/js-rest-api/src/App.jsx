import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import LandingPage from './Pages/LandingPage';
import CreateProduct from './Pages/CreateProduct';
import { PAGE_URL } from './Utils/constant';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isLogin = useSelector((state) => state.login.isLogin)
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={PAGE_URL.HOME} element={<LandingPage />} />
          {!isLogin ? (
            <>
              <Route path={PAGE_URL.LOGIN} element={<Login />} />
              <Route path={PAGE_URL.REGISTER} element={<Register />} />
            </>
          ) : (
            <Route path={PAGE_URL.CREATEPRODUCT} element={<CreateProduct />} />
          )}
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
