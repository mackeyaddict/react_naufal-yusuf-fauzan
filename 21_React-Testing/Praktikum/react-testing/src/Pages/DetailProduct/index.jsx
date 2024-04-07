import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);

  console.log(products)
  console.log(productId)
  console.log(product)
  useEffect(() => {
    const foundProduct = products.find((item) => item.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Product ID: {product.id}</p>
      <p>Product Category: {product.productCategory}</p>
      <p>Product Freshness: {product.productFreshness}</p>
      <p>Product Price: {product.productPrice}</p>
      <img src={product.productImage} alt={product.productName} />
      <p>Additional Description: {product.productDesc}</p>
    </div>
  );
};

export default DetailProduct;
