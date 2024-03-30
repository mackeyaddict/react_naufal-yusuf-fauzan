import { useState } from 'react';
import { Table } from './table';
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

  const [productNameError, setProductNameError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    let newFormData = { ...formData };
    if (type === 'radio') {
      newFormData[id] = checked;
    } else {
      newFormData[id] = value;
    }
    setFormData(newFormData);

    if (id === 'productName' && value.length > 25) {
      setProductNameError('Product Name should not exceed 25 characters');
    } else {
      setProductNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.productName.trim()) {
      setSubmitError('Please enter a valid product name.');
      return;
    }

    const newProduct = {
      id: uuidv4(),
      productName: formData.productName,
      productCategory: formData.productCategory,
      productFreshness: formData.productFreshness,
      productPrice: formData.productPrice
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

  const formFields = [
    {
      id: 'productName',
      label: 'Product Name',
      type: 'text',
    },
    {
      id: 'productCategory',
      label: 'Product Category',
      type: 'select',
      options: [
        { value: '', text: 'Choose...', disabled: true, selected: true, hidden: true },
        { value: 'electronic', text: 'Electronic' },
        { value: 'other-category', text: 'Other' }
      ]
    },
    {
      id: 'productImage',
      label: 'Image of Product',
      type: 'file'
    },
    {
      id: 'productFreshness',
      label: 'Product Freshness',
      type: 'radio',
      options: [
        { value: 'Brand New', label: 'Brand New' },
        { value: 'Second Hand', label: 'Second Hand' },
        { value: 'Refurbished', label: 'Refurbished' }
      ]
    },
    {
      id: 'productDesc',
      label: 'Additional Description',
      type: 'textarea',
      rows: 5
    },
    {
      id: 'productPrice',
      label: 'Product Price',
      type: 'number',
      placeholder: '$ 100'
    }
  ];

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h4 className="fw-bold">Detail Product</h4>
            <form id="form" onSubmit={handleSubmit}>
              {formFields.map(field => (
                <div key={field.id} className={`mb-3 col-12 ${field.type === 'textarea' ? '' : 'col-md-8 col-lg-4'}`}>
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        id={field.id}
                        value={formData[field.id]}
                        onChange={handleInputChange}
                      />
                      {field.id === 'productName' && productNameError && (
                        <div className="text-danger">{productNameError}</div>
                      )}
                      {submitError && <div className="text-danger mb-3">{submitError}</div>}
                    </>
                  )}
                  {field.type === 'select' && (
                    <select
                      id={field.id}
                      className="form-control"
                      value={formData[field.id]}
                      onChange={handleInputChange}
                    >
                      {field.options.map(option => (
                        <option
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                          selected={option.selected}
                          hidden={option.hidden}
                        >
                          {option.text || option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  {field.type === 'file' && (
                    <input
                      type="file"
                      id={field.id}
                      className="form-control text-primary"
                      onChange={handleInputChange}
                    />
                  )}
                  {field.type === 'radio' && (
                    <div>
                      {field.options.map(option => (
                        <div key={option.value} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={field.id}
                            id={option.value}
                            value={option.value}
                            checked={formData.productFreshness === option.value}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor={option.value}>
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  {field.type === 'textarea' && (
                    <textarea
                      id={field.id}
                      rows={field.rows}
                      className="form-control"
                      value={formData[field.id]}
                      onChange={handleInputChange}
                    />
                  )}
                  {field.type === 'number' && (
                    <input
                      type="number"
                      className="form-control"
                      id={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
              <div className="my-5 col-12">
                <input type="submit" value="Submit" className="btn btn-primary w-100" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Table products={products} onDelete={handleDelete} state={{ products, setProducts }} />
    </section>
  );
}
