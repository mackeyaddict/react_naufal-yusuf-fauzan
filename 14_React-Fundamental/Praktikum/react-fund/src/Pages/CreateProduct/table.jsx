export default function Table() {
  const tableHead = ["No", "Product Name", "Product Category", "Image of Product", "Product Freshness", "Additiona Description", "Product Price"]
  return (
    <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 mb-3 justify-content-center text-center">
          <h1 className="fw-bold">List Products</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  {tableHead.map((item, index) => (
                    <th scope="col" key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}