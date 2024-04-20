import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from '../CreateProduct/table';
import { addFormData } from '../../store/slice/form.slice';
import { useFetch } from '../../Utils/useFetch';
import usePost from '../../Utils/usePost';
import { toast } from 'react-toastify';

export default function Form() {
  const dispatch = useDispatch();
  const {fetcher, isLoading} = useFetch();
  const { post, isPosting } = usePost();
  

  useEffect(() => {
    fetcher("/products");
  },[])

  console.log(isLoading)

  const [formState, setFormState] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productImage: '',
    productDesc: '',
    productPrice: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
    if (id === 'productName' && value.length > 25) {
      toast.error("Product name should not exceed 25 characters.");
      return;
    }
  };
  
  const handleRadioChange = (e) => {
    const { id } = e.target;
    setFormState({ ...formState, productFreshness: id });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.productName) {
      toast.error("Product name is required.");
      return;
    }

    if (!formState.productCategory) {
      toast.error("Product category is required.");
      return;
    }

    if (!formState.productFreshness) {
      toast.error("Product freshness is required.");
      return;
    }
  
    if (!formState.productImage) {
      toast.error("Product image link is required.");
      return;
    }

    if (!formState.productPrice || isNaN(formState.productPrice)) {
      toast.error("Product price must be a valid number.");
      return;
    }

    const newFormData = {
      id: uuidv4(),
      ...formState
    };

    try {
      await post("/products", newFormData);
      dispatch(addFormData(newFormData));
      setFormState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productDesc: '',
        productPrice: '',
      });
      toast.success("Product posted")
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };

  console.log('isPosting',isPosting)

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
                  value={formState.productName}
                  onChange={handleInputChange}
                />
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
                  <option value="Electronic">Electronic</option>
                  <option value="other-category">Other</option>
                </select>
              </div>
              <div className="mb-3 col-4">
                <label className="form-label">Product Freshness</label>
                {['New', 'Used', 'Refurbished'].map(option => (
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
              <div className="mb-3 col-4">
                <label htmlFor="productImage" className="form-label">Product Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="productImage"
                  placeholder='Input image link here'
                  value={formState.productImage}
                  onChange={handleInputChange}
                />
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
