import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Template = () =>{
    return(
<>
  <div>
    <Sidebar/>
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar pageTitle="Template"/>
      <div className="container-fluid py-2">
        <Footer/>
      </div>
    </main>
    <div className="fixed-plugin">
      <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
        <i className="material-symbols-rounded py-2">settings</i>
      </a>
      <div className="card shadow-lg">
        <div className="card-header pb-0 pt-3">
          <div className="float-start">
            <h5 className="mt-3 mb-0">Material UI Configurator</h5>
            <p>See our dashboard options.</p>
          </div>
          <div className="float-end mt-4">
            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
              <i className="material-symbols-rounded">clear</i>
            </button>
          </div>
          {/* End Toggle Button */}
        </div>
        <hr className="horizontal dark my-1" />
        <div className="card-body pt-sm-3 pt-0">
          {/* Sidebar Backgrounds */}
          <div>
            <h6 className="mb-0">Sidebar Colors</h6>
          </div>
          <a
            href="javascript:void(0)"
            className="switch-trigger background-color"
          >
            <div className="badge-colors my-2 text-start">
              <span
                className="badge filter bg-gradient-primary"
                data-color="primary"
                onclick="sidebarColor(this)"
              />
              <span
                className="badge filter bg-gradient-dark active"
                data-color="dark"
                onclick="sidebarColor(this)"
              />
              <span
                className="badge filter bg-gradient-info"
                data-color="info"
                onclick="sidebarColor(this)"
              />
              <span
                className="badge filter bg-gradient-success"
                data-color="success"
                onclick="sidebarColor(this)"
              />
              <span
                className="badge filter bg-gradient-warning"
                data-color="warning"
                onclick="sidebarColor(this)"
              />
              <span
                className="badge filter bg-gradient-danger"
                data-color="danger"
                onclick="sidebarColor(this)"
              />
            </div>
          </a>
          {/* Sidenav Type */}
          <div className="mt-3">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between different sidenav types.</p>
          </div>
          <div className="d-flex">
            <button
              className="btn bg-gradient-dark px-3 mb-2"
              data-class="bg-gradient-dark"
              onclick="sidebarType(this)"
            >
              Dark
            </button>
            <button
              className="btn bg-gradient-dark px-3 mb-2 ms-2"
              data-class="bg-transparent"
              onclick="sidebarType(this)"
            >
              Transparent
            </button>
            <button
              className="btn bg-gradient-dark px-3 mb-2  active ms-2"
              data-class="bg-white"
              onclick="sidebarType(this)"
            >
              White
            </button>
          </div>
          <p className="text-sm d-xl-none d-block mt-2">
            You can change the sidenav type just on desktop view.
          </p>
          {/* Navbar Fixed */}
          <div className="mt-3 d-flex">
            <h6 className="mb-0">Navbar Fixed</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onclick="navbarFixed(this)"
              />
            </div>
          </div>
          <hr className="horizontal dark my-3" />
          <div className="mt-2 d-flex">
            <h6 className="mb-0">Light / Dark</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="dark-version"
                onclick="darkMode(this)"
              />
            </div>
          </div>
          <hr className="horizontal dark my-sm-4" />
          <a
            className="btn bg-gradient-info w-100"
            href="https://www.creative-tim.com/product/material-dashboard-pro"
          >
            Free Download
          </a>
          <a
            className="btn btn-outline-dark w-100"
            href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard"
          >
            View documentation
          </a>
          <div className="w-100 text-center">
            <a
              className="github-button"
              href="https://github.com/creativetimofficial/material-dashboard"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star creativetimofficial/material-dashboard on GitHub"
            >
              Star
            </a>
            <h6 className="mt-3">Thank you for sharing!</h6>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="_blank"
            >
              <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="_blank"
            >
              <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
              Share
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*   Core JS Files   */}
    {/* Github buttons */}
    {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
  </div>
</>
    )

}


export default Template
