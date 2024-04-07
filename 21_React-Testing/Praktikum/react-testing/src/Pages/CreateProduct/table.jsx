import { useDispatch, useSelector } from 'react-redux';
import { removeFormData} from '../../store/slice/form.slice';


export default function Table() {
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.form.formData); 
  console.log(products)

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (isConfirmed) {
      dispatch(removeFormData(id));
    }
  };

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
            <th scope="col">Product Desc</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item?.id}>
              <th scope="row">{index + 1}</th>
              <td>{item?.id}</td>
              <td>{item?.productName}</td>
              <td>{item?.productCategory}</td>
              <td>{item?.productFreshness}</td>
              <td>$ {item?.productPrice}</td>
              <td>{item?.productDesc}</td>
              <td className='d-flex'>
                <button className="btn btn-danger" onClick={() => handleDelete(item?.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
