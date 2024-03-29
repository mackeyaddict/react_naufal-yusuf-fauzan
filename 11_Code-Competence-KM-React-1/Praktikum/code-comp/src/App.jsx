// #C69749
// #7077A1
// #424769
// #2D3250

import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGE_URL } from "./Utils/Constant";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


export default function App(){
  return(
    <main>
      <BrowserRouter>
        <Navbar/>
        <Routes>          
          <Route path={PAGE_URL.HOME} element={<Home/>}/>
          <Route path={PAGE_URL.ABOUT} element={<About/>}/>
          <Route path={PAGE_URL.CONTACT} element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
    
  )
}