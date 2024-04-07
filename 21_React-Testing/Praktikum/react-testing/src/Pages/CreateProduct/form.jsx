import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from '../CreateProduct/table';
import { addFormData } from '../../store/slice/form.slice';

export default function Form() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productDesc: '',
    productPrice: '',
  });

  const [productNameError, setProductNameError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let error = '';

    if (id === 'productName') {
      if (value.length > 25) {
        error = 'Product Name should not exceed 25 characters.';
      } else if (/[@#{}]/.test(value)) {
        error = 'Product Name should not contain @/#{} characters.';
      }
    }

    setFormState({ ...formState, [id]: value });
    setProductNameError(error);
  };
  
  const handleRadioChange = (e) => {
    const { id } = e.target;
    setFormState({ ...formState, productFreshness: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formState.productName.trim() === '' || /[@#{}]/.test(formState.productName)) {
      setProductNameError('Product Name cannot be empty');
      return;
    }

    const newFormData = {
      id: uuidv4(),
      ...formState
    };

    dispatch(addFormData(newFormData));
    setFormState({
      productName: '',
      productCategory: '',
      productFreshness: '',
      productDesc: '',
      productPrice: '',
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h4 className="fw-bold">Detail Product</h4>
            <form id="form" role='form' onSubmit={handleSubmit}>
              <div className="mb-3 col-4">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={formState.productName}
                  onChange={handleInputChange}
                />
                {productNameError && <div className="text-danger">{productNameError}</div>}
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="productCategory" className="form-label">Product Category</label>
                <select
                  id="productCategory"
                  className="form-control"
                  value={formState.productCategory}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select...</option>
                  <option value="electronic">Electronic</option>
                  <option value="other-category">Other</option>
                </select>
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
                      checked={formState.productFreshness === option}
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
                  value={formState.productDesc}
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
                  value={formState.productPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-5 col-12">
                <input type="submit" value="Submit" className="btn btn-primary w-100" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Table />
    </section>
  );
}
