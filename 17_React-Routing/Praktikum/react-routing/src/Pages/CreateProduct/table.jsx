import { Link } from 'react-router-dom'; 
import { PAGE_URL } from '../../Utils/constant';

export function Table({ products, onDelete }) {
  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (isConfirmed) {
      onDelete(id);
    }
  };

  console.log(products);

  return (
    <div className="container mt-5">
      <h4 className="fw-bold">Products</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td className='d-flex'>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
                <Link to={`${PAGE_URL.DETAILPRODUCT}/${product.id}`} className="btn btn-primary ms-2">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
