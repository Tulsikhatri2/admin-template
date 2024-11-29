import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Notifications = () =>{
    return(
        <>
  <div>
    <Sidebar/>
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar pageTitle="Notifications"/>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="card mt-4">
              <div className="card-header p-3">
                <h5 className="mb-0">Alerts</h5>
              </div>
              <div className="card-body p-3 pb-0">
                <div
                  className="alert alert-primary alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple primary alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-secondary alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple secondary alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-success alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple success alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-danger alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple danger alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-warning alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple warning alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-info alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple info alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-light alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple light alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="alert alert-dark alert-dismissible text-white"
                  role="alert"
                >
                  <span className="text-sm">
                    A simple dark alert with{" "}
                    <a href="javascript:;" className="alert-link text-white">
                      an example link
                    </a>
                    . Give it a click if you like.
                  </span>
                  <button
                    type="button"
                    className="btn-close text-lg py-3 opacity-10"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header p-3">
                <h5 className="mb-0">Notifications</h5>
                <p className="text-sm mb-0">
                  Notifications on this page use Toasts from Bootstrap. Read
                  more details{" "}
                  <a
                    href="https://getbootstrap.com/docs/5.0/components/toasts/"
                    target="
    "
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <button
                      className="btn bg-gradient-success w-100 mb-0 toast-btn"
                      type="button"
                      data-target="successToast"
                    >
                      Success
                    </button>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
                    <button
                      className="btn bg-gradient-info w-100 mb-0 toast-btn"
                      type="button"
                      data-target="infoToast"
                    >
                      Info
                    </button>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                    <button
                      className="btn bg-gradient-warning w-100 mb-0 toast-btn"
                      type="button"
                      data-target="warningToast"
                    >
                      Warning
                    </button>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                    <button
                      className="btn bg-gradient-danger w-100 mb-0 toast-btn"
                      type="button"
                      data-target="dangerToast"
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-fixed bottom-1 end-1 z-index-2">
          <div
            className="toast fade hide p-2 bg-white"
            role="alert"
            aria-live="assertive"
            id="successToast"
            aria-atomic="true"
          >
            <div className="toast-header border-0">
              <i className="material-symbols-rounded text-success me-2">
                check
              </i>
              <span className="me-auto font-weight-bold">
                Material Dashboard{" "}
              </span>
              <small className="text-body">11 mins ago</small>
              <i
                className="fas fa-times text-md ms-3 cursor-pointer"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <hr className="horizontal dark m-0" />
            <div className="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div
            className="toast fade hide p-2 mt-2 bg-gradient-info"
            role="alert"
            aria-live="assertive"
            id="infoToast"
            aria-atomic="true"
          >
            <div className="toast-header bg-transparent border-0">
              <i className="material-symbols-rounded text-white me-2">
                notifications
              </i>
              <span className="me-auto text-white font-weight-bold">
                Material Dashboard{" "}
              </span>
              <small className="text-white">11 mins ago</small>
              <i
                className="fas fa-times text-md text-white ms-3 cursor-pointer"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <hr className="horizontal light m-0" />
            <div className="toast-body text-white">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div
            className="toast fade hide p-2 mt-2 bg-white"
            role="alert"
            aria-live="assertive"
            id="warningToast"
            aria-atomic="true"
          >
            <div className="toast-header border-0">
              <i className="material-symbols-rounded text-warning me-2">
                travel_explore
              </i>
              <span className="me-auto font-weight-bold">
                Material Dashboard{" "}
              </span>
              <small className="text-body">11 mins ago</small>
              <i
                className="fas fa-times text-md ms-3 cursor-pointer"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <hr className="horizontal dark m-0" />
            <div className="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div
            className="toast fade hide p-2 mt-2 bg-white"
            role="alert"
            aria-live="assertive"
            id="dangerToast"
            aria-atomic="true"
          >
            <div className="toast-header border-0">
              <i className="material-symbols-rounded text-danger me-2">
                campaign
              </i>
              <span className="me-auto text-gradient text-danger font-weight-bold">
                Material Dashboard{" "}
              </span>
              <small className="text-body">11 mins ago</small>
              <i
                className="fas fa-times text-md ms-3 cursor-pointer"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <hr className="horizontal dark m-0" />
            <div className="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
        </div>
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


export default Notifications
