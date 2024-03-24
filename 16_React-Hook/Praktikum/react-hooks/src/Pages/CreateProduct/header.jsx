import { useState, useEffect } from 'react';
import BootstrapLogo from "../../assets/bootstrap-logo.svg.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account"
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

export default function Header() {

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Random Number:', randomNumber);
  };

  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

    useEffect(() => {
    toast.info("Welcome");
  }, []);

  return (
    <section>
      <div className="container py-5 position-relative">
        <div className="row">
          <div className="col-12 justify-content-center text-center">
            <img src={BootstrapLogo} alt="" />
            <h1 className="fw-bold pt-4">{article.title[language]}</h1>
            <h5 className="text-body-secondary">{article.description[language]}</h5>
            <button className="btn btn-primary position-absolute top-0 end-0 mt-3 me-3" onClick={toggleLanguage}>
              {language === 'en' ? 'Switch to Indonesian' : 'Ubah ke Bahasa Inggris'}
            </button>
            <button className='btn btn-primary position-absolute top-0 start-0 mt-3 me-3' onClick={handleClick}>Generate Random Number</button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
}
