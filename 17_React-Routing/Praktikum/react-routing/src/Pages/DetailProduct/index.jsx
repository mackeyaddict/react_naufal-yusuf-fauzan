import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { productId } = useParams();

  console.log('ProductId:', productId); 

  const product = products.find(product => product.id === productId);

  console.log('Product:', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <h4 className="fw-bold">Product Detail</h4>
      <ul>
        <li>ID: {product.id}</li>
        <li>Name: {product.productName}</li>
        <li>Category: {product.productCategory}</li>
        <li>Freshness: {product.productFreshness}</li>
        <li>Price: {product.productPrice}</li>
      </ul>
    </div>
  );
}

export default ProductDetail;
