export default function Form() {
  const formFields = [
    {
      id: 'productName',
      label: 'Product Name',
      type: 'text',
      maxLength: 25
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
            <form id="form">
              {formFields.map(field => (
                <div key={field.id} className={`mb-3 col-12 ${field.type === 'textarea' ? '' : 'col-md-8 col-lg-4'}`}>
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <input
                      type="text"
                      className="form-control"
                      id={field.id}
                      maxLength={field.maxLength}
                    />
                  )}
                  {field.type === 'select' && (
                    <select id={field.id} className="form-control">
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
                    />
                  )}
                  {field.type === 'number' && (
                    <input
                      type="number"
                      className="form-control"
                      id={field.id}
                      placeholder={field.placeholder}
                    />
                  )}
                  <div className="alert text-danger d-none" role="alert" id={`${field.id}Danger`} />
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