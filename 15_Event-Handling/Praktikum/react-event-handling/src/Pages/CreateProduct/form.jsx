import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    productImage: '',
    productFreshness: '',
    productDesc: '',
    productPrice: ''
  });

  const [productNameError, setProductNameError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });

    if (id === 'productName' && value.length > 25) {
      setProductNameError('Product Name should not exceed 10 characters');
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

    setSubmitError('');
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
        { id: 'brandNew', value: 'Brand New', label: 'Brand New' },
        { id: 'secondHand', value: 'Second Hand', label: 'Second Hand' },
        { id: 'refurbished', value: 'Refurbished', label: 'Refurbished' }
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
                          {option.text}
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
                        <div key={option.id} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={field.id}
                            id={option.id}
                            value={option.value}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor={option.id}>
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
                      defaultValue={""}
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
    </section>
  );
}
