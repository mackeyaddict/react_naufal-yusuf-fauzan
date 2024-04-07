import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import LandingPage from './Pages/LandingPage';
import CreateProduct from './Pages/CreateProduct';
import ProductDetail from './Pages/DetailProduct';
import { PAGE_URL } from './Utils/constant';

function App({products}) {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={PAGE_URL.HOME} element={<LandingPage />} />
          <Route path={PAGE_URL.CREATEPRODUCT} element={<CreateProduct />} />
          <Route path={`${PAGE_URL.DETAILPRODUCT}/:productId`} element={<ProductDetail products={products} />} /> {/* Pass products as props */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
