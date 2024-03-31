import { useState } from 'react';
import Table from "../CreateProduct/table"
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    productImage: '',
    productFreshness: false,
    productDesc: '',
    productPrice: ''
  });

  const [productImage, setProductImage] = useState('');

  const [productNameError, setProductNameError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value})
    
    if (id === 'productName' && value.length > 25) {
      setProductNameError('Product Name should not exceed 25 characters');
    } else {
      setProductNameError('');
    }
  }

  const handleRadioChange = (e) => {
    const { value } = e.target;
  
    setFormData(prevState => ({
      ...prevState,
      productFreshness: value
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductImage(imageFile);
  };

  const nameRegex = /^[a-zA-Z\s]+$/;
  const categoryRegex = /^(electronic|other-category)$/;
  const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/; 
  const priceRegex = /^\d+$/; 
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.productName.trim() || !nameRegex.test(formData.productName.trim())) {
      setSubmitError('Product name must not contain number or special character.');
      return;
    }

    if (!formData.productCategory || !categoryRegex.test(formData.productCategory)) {
      setSubmitError('Please select a valid product category.');
      return;
    }

    if (!allowedExtensions.exec(productImage.name)) {
      setSubmitError('Please upload an image in JPG or PNG format.');
      return;
    }

    if (!formData.productFreshness || !freshnessRegex.test(formData.productFreshness)) {
      setSubmitError('Please select a valid product freshness.');
      return;
    }
    

    if (!formData.productPrice || !priceRegex.test(formData.productPrice)) {
      setSubmitError('Product price cannot be decimal');
      return;
    }

    const newProduct = {
      id: uuidv4(),
      productName: formData.productName,
      productCategory: formData.productCategory,
      productFreshness: formData.productFreshness,
      productPrice: formData.productPrice,
      productDesc: formData.productDesc,
      productImage: productImage.name
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setSubmitError('');
    setFormData({
      productName: '',
      productCategory: '',
      productImage: '',
      productFreshness: '',
      productDesc: '',
      productPrice: ''
    });
  };


  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h4 className="fw-bold">Detail Product</h4>
            <form id="form" onSubmit={handleSubmit}>
              <div className="mb-3 col-4">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                />
                {productNameError && <div className="text-danger">{productNameError}</div>}
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="productCategory" className="form-label">Product Category</label>
                <select
                  id="productCategory"
                  className="form-control"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select...</option>
                  <option value="electronic">Electronic</option>
                  <option value="other-category">Other</option>
                </select>
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="productImage" className="form-label">Image of Product</label>
                <input
                  type="file"
                  id="productImage"
                  className="form-control text-primary"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-3 col-4">
                <label className="form-label">Product Freshness</label>
                {['Brand New', 'Second Hand', 'Refurbished'].map(option => (
                  <div key={option} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={option}
                      value={option}
                      checked={formData.productFreshness === option}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="productDesc" className="form-label">Additional Description</label>
                <textarea
                  id="productDesc"
                  rows={5}
                  className="form-control"
                  value={formData.productDesc}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  placeholder="$ 100"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-5 col-12">
                <input type="submit" value="Submit" className="btn btn-primary w-100" />
                {submitError && <div className="text-danger mt-2">{submitError}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Table products={products} onDelete={handleDelete} state={{ products, setProducts }} />
    </section>
  );
}
