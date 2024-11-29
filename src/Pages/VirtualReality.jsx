import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import sunLogo from "../Assets/img/small-logos/icon-sun-cloud.png"
import team1 from "../Assets/img/team-1.jpg"
import team2 from "../Assets/img/team-2.jpg"
import team3 from "../Assets/img/team-3.jpg"
import team4 from "../Assets/img/team-4.jpg"

const VirtualReality = () => {
  return (
    <>
      <div>
        <div
          className="border-radius-xl mx-2 mx-md-3 position-relative"
          style={{
            backgroundImage: 'url("../assets/img/vr-bg.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Sidebar/>
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <Navbar pageTitle="Virtual-Reality"/>
            <div className="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7">
              <div className="container-fluid">
                <div className="row pt-10">
                  <div className="col-lg-1 col-md-1 pt-5 pt-lg-0 ms-lg-5 text-center">
                    <a
                      href="javascript:;"
                      className="avatar avatar-lg border-0 p-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="My Profile"
                    >
                      <img
                        className="border-radius-lg"
                        alt="Image placeholder"
                        src={team1}
                      />
                    </a>
                    <button
                      className="btn btn-white border-radius-lg p-2 mt-n4 mt-md-2"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Home"
                    >
                      <i className="material-symbols-rounded p-2">home</i>
                    </button>
                    <button
                      className="btn btn-white border-radius-lg p-2 mt-n4 mt-md-0"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Search"
                    >
                      <i className="material-symbols-rounded p-2">search</i>
                    </button>
                    <button
                      className="btn btn-white border-radius-lg p-2 mt-n4 mt-md-0"
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Minimize"
                    >
                      <i className="material-symbols-rounded p-2">more_horiz</i>
                    </button>
                  </div>
                  <div className="col-lg-8 col-md-11 ps-md-5 mb-5 mb-md-0">
                    <div className="d-flex">
                      <div className="me-auto">
                        <h1 className="display-1 font-weight-bold mt-n3 mb-0 text-white">
                          28°C
                        </h1>
                        <h6 className="text-uppercase mb-0 ms-1 text-white">
                          Cloudy
                        </h6>
                      </div>
                      <div className="ms-auto">
                        <img
                          className="w-50 float-end mt-n6 mt-lg-n4"
                          src={sunLogo}
                          alt="image sun"
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-4 col-md-6">
                        <div className="card move-on-hover overflow-hidden">
                          <div className="card-body">
                            <div className="d-flex">
                              <h6 className="mb-0 me-3">08:00</h6>
                              <h6 className="mb-0">
                                Synk up with Mark
                                <small className="text-secondary font-weight-normal">
                                  Hangouts
                                </small>
                              </h6>
                            </div>
                            <hr className="horizontal dark" />
                            <div className="d-flex">
                              <h6 className="mb-0 me-3">09:30</h6>
                              <h6 className="mb-0">
                                Gym <br />
                                <small className="text-secondary font-weight-normal">
                                  World Class
                                </small>
                              </h6>
                            </div>
                            <hr className="horizontal dark" />
                            <div className="d-flex">
                              <h6 className="mb-0 me-3">11:00</h6>
                              <h6 className="mb-0">
                                Design Review
                                <br />
                                <small className="text-secondary font-weight-normal">
                                  Zoom
                                </small>
                              </h6>
                            </div>
                          </div>
                          <a
                            href="javascript:;"
                            className="bg-gray-100 w-100 text-center py-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Show More"
                          >
                            <i className="material-symbols-rounded text-primary">
                              expand_more
                            </i>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="card bg-gradient-dark move-on-hover">
                          <div className="card-body">
                            <div className="d-flex">
                              <h5 className="mb-0 text-white">To Do</h5>
                              <div className="ms-auto">
                                <h1 className="text-white text-end mb-0 mt-n2">
                                  7
                                </h1>
                                <p className="text-sm mb-0 text-white">items</p>
                              </div>
                            </div>
                            <p className="text-white mb-0">Shopping</p>
                            <p className="mb-0 text-white">Meeting</p>
                          </div>
                          <a
                            href="javascript:;"
                            className="w-100 text-center py-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Show More"
                          >
                            <i className="material-symbols-rounded text-white">
                              expand_more
                            </i>
                          </a>
                        </div>
                        <div className="card move-on-hover mt-4">
                          <div className="card-body">
                            <div className="d-flex">
                              <p className="mb-0">Emails (21)</p>
                              <a
                                href="javascript:;"
                                className="ms-auto"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Check your emails"
                              >
                                Check
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
                        <div className="card card-background card-background-mask-dark move-on-hover align-items-start">
                          <div className="cursor-pointer">
                            <div
                              className="full-background"
                              style={{
                                backgroundImage:
                                  'url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80")',
                              }}
                            />
                            <div className="card-body">
                              <h5 className="text-white mb-0">Night Jazz</h5>
                              <p className="text-white text-sm">Gary Coleman</p>
                              <div className="d-flex mt-5">
                                <button
                                  className="btn btn-outline-white rounded-circle p-2 mb-0"
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Prev"
                                >
                                  <i className="material-symbols-rounded p-2 mt-0">
                                    skip_previous
                                  </i>
                                </button>
                                <button
                                  className="btn btn-outline-white rounded-circle p-2 mx-2 mb-0"
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Pause"
                                >
                                  <i className="material-symbols-rounded p-2 mt-0">
                                    play_arrow
                                  </i>
                                </button>
                                <button
                                  className="btn btn-outline-white rounded-circle p-2 mb-0"
                                  type="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Next"
                                >
                                  <i className="material-symbols-rounded p-2 mt-0">
                                    skip_next
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card move-on-hover mt-4">
                          <div className="card-body">
                            <div className="d-flex">
                              <p className="my-auto">Messages</p>
                              <div className="ms-auto">
                                <div className="avatar-group">
                                  <a
                                    href="javascript:;"
                                    className="avatar avatar-sm border-0 rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="2 New Messages"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src={team1}
                                    />
                                  </a>
                                  <a
                                    href="javascript:;"
                                    className="avatar avatar-sm border-0 rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="1 New Message"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src={team2}
                                    />
                                  </a>
                                  <a
                                    href="javascript:;"
                                    className="avatar avatar-sm border-0 rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="13 New Messages"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src={team3}
                                    />
                                  </a>
                                  <a
                                    href="javascript:;"
                                    className="avatar avatar-sm border-0 rounded-circle"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="7 New Messages"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src={team4}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <Footer/>
          </main>
        </div>
       
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
                <p className="text-sm">
                  Choose between different sidenav types.
                </p>
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
                  <i
                    className="fab fa-facebook-square me-1"
                    aria-hidden="true"
                  />{" "}
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
  );
};

export default VirtualReality;
