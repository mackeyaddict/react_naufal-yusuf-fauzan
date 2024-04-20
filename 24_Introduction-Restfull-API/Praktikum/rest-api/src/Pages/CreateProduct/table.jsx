import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFormData, updateFormData } from "../../store/slice/form.slice";
import useDelete from "../../Utils/useDelete";
import useUpdate from "../../Utils/useUpdate";
import { toast } from "react-toastify";

export default function Table() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.form.formData);
  const { deleteData, isDeleting } = useDelete();
  const { updateData, isUpdating } = useUpdate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productImage: "",
    productDesc: "",
    productPrice: "",
  });

  const handleUpdateModalOpen = (product) => {
    setSelectedProduct(product);
    setUpdatedProductData({ ...product });
    setModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUpdatedProductData({ ...updatedProductData, [id]: value });
  };

  const handleRadioChange = (e) => {
    const { id } = e.target;
    setUpdatedProductData({ ...updatedProductData, productFreshness: id });
  };

  const handleUpdate = async () => {
    try {
      await updateData(`/products/${selectedProduct.id}`, updatedProductData);
      dispatch(
        updateFormData({ id: selectedProduct.id, newData: updatedProductData })
      );
      toast.success("Product updated successfully");
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Product not updated")
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      try {
        await deleteData(`/products/${id}`);
        dispatch(removeFormData(id));
        toast.success("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Product not deleted");
      }
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
            <th scope="col">Product Image</th>
            <th scope="col">Product Desc</th>
            <th scope="col">Product Price</th>
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
              <td>
                <img
                  src={item?.productImage}
                  alt={item?.productName}
                  style={{ maxWidth: "100px" }}
                />
              </td>
              <td>{item?.productDesc}</td>
              <td>$ {item?.productPrice}</td>
              <td>
                <div className="d-flex">
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleUpdateModalOpen(item)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item?.id)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div
          className={`modal ${modalOpen ? "show" : ""}`}
          style={{ display: modalOpen ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleUpdateModalClose}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3 col-4">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={updatedProductData.productName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="productCategory" className="form-label">
                    Product Category
                  </label>
                  <select
                    id="productCategory"
                    className="form-control"
                    value={updatedProductData.productCategory}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="Electronic">Electronic</option>
                    <option value="other-category">Other</option>
                  </select>
                </div>
                <div className="mb-3 col-4">
                  <label className="form-label">Product Freshness</label>
                  {["New", "Used", "Refurbished"].map((option) => (
                    <div key={option} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id={option}
                        value={option}
                        checked={updatedProductData.productFreshness === option}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="productImage" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productImage"
                    placeholder="Input image link here"
                    value={updatedProductData.productImage}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-12">
                  <label htmlFor="productDesc" className="form-label">
                    Additional Description
                  </label>
                  <textarea
                    id="productDesc"
                    rows={5}
                    className="form-control"
                    value={updatedProductData.productDesc}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 col-4">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    placeholder="$ 100"
                    value={updatedProductData.productPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleUpdateModalClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
