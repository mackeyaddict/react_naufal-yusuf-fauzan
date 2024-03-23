import BootstrapLogo from "../../assets/bootstrap-logo.svg.png"

export default function Header() {
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 justify-content-center text-center">
            <img src={BootstrapLogo} alt="" />
            <h1 className="fw-bold pt-4">Create Product</h1>
            <h5 className="text-body-secondary">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each form group has a validation state that can be triggered
              by attempting to submit the form without completing it.
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}