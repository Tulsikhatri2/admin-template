import React from 'react' 
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Tables = () =>{
    return(
        <>
  <div>
    <Sidebar/>
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar pageTitle="Tables"/>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Authors table
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Author
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Function
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Employed
                        </th>
                        <th className="text-secondary opacity-7" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user1"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">John Michael</h6>
                              <p className="text-xs text-secondary mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Manager
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Organization
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            23/04/18
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user2"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Alexa Liras</h6>
                              <p className="text-xs text-secondary mb-0">
                                alexa@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Developer
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            11/01/19
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user3"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                              <p className="text-xs text-secondary mb-0">
                                laurent@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Executive
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Projects
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            19/09/17
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user4"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Michael Levi</h6>
                              <p className="text-xs text-secondary mb-0">
                                michael@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Developer
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            24/12/08
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user5"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Richard Gran</h6>
                              <p className="text-xs text-secondary mb-0">
                                richard@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Manager
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Executive
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            04/10/21
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user6"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Miriam Eric</h6>
                              <p className="text-xs text-secondary mb-0">
                                miriam@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            Developer
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            14/09/20
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Projects table
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center justify-content-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Project
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Budget
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Status
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                          Completion
                        </th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/logo-asana.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="spotify"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Asana</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $2,500
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            working
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              60%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "60%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button className="btn btn-link text-secondary mb-0">
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/github.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="invision"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Github</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $5,000
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">done</span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              100%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-link text-secondary mb-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/logo-atlassian.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="jira"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Atlassian</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $3,400
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            canceled
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              30%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-danger"
                                  role="progressbar"
                                  aria-valuenow={30}
                                  aria-valuemin={0}
                                  aria-valuemax={30}
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-link text-secondary mb-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/bootstrap.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="webdev"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Bootstrap</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $14,000
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            working
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              80%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info"
                                  role="progressbar"
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={80}
                                  style={{ width: "80%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-link text-secondary mb-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/logo-slack.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="slack"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Slack</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $1,000
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            canceled
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              0%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={0}
                                  style={{ width: "0%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-link text-secondary mb-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2">
                            <div>
                              <img
                                src="../assets/img/small-logos/devto.svg"
                                className="avatar avatar-sm rounded-circle me-2"
                                alt="xd"
                              />
                            </div>
                            <div className="my-auto">
                              <h6 className="mb-0 text-sm">Devto</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-sm font-weight-bold mb-0">
                            $2,300
                          </p>
                        </td>
                        <td>
                          <span className="text-xs font-weight-bold">done</span>
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className="me-2 text-xs font-weight-bold">
                              100%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-link text-secondary mb-0"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-xs" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

  export default Tables
