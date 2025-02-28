import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Profile = () =>{
    return(
        <>
  <div>
    <Sidebar/>
    <div className="main-content position-relative max-height-vh-100 h-100">
      <Navbar pageTitle="Profile"/>
      <div className="container-fluid px-2 px-md-4">
        <div
          className="page-header min-height-300 border-radius-xl mt-4"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          <span className="mask  bg-gradient-dark  opacity-6" />
        </div>
        <div className="card card-body mx-2 mx-md-2 mt-n6">
          <div className="row gx-4 mb-2">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/bruce-mars.jpg"
                  alt="profile_image"
                  className="w-100 border-radius-lg shadow-sm"
                />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">Richard Davis</h5>
                <p className="mb-0 font-weight-normal text-sm">
                  CEO / Co-Founder
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 active "
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="true"
                    >
                      <i className="material-symbols-rounded text-lg position-relative">
                        home
                      </i>
                      <span className="ms-1">App</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 "
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="material-symbols-rounded text-lg position-relative">
                        email
                      </i>
                      <span className="ms-1">Messages</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-0 px-0 py-1 "
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="material-symbols-rounded text-lg position-relative">
                        settings
                      </i>
                      <span className="ms-1">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Platform Settings</h6>
                  </div>
                  <div className="card-body p-3">
                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">
                      Account
                    </h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Email me when someone follows me
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault1"
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault1"
                          >
                            Email me when someone answers on my post
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault2"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault2"
                          >
                            Email me when someone mentions me
                          </label>
                        </div>
                      </li>
                    </ul>
                    <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">
                      Application
                    </h6>
                    <ul className="list-group">
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault3"
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault3"
                          >
                            New launches and projects
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault4"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault4"
                          >
                            Monthly product updates
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item border-0 px-0 pb-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            id="flexSwitchCheckDefault5"
                          />
                          <label
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                            htmlFor="flexSwitchCheckDefault5"
                          >
                            Subscribe to newsletter
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end">
                        <a href="javascript:;">
                          <i
                            className="fas fa-user-edit text-secondary text-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit Profile"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <p className="text-sm">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                      answer is no. If two equally difficult paths, choose the
                      one more painful in the short term (pain avoidance is
                      creating an illusion of equality).
                    </p>
                    <hr className="horizontal gray-light my-4" />
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong className="text-dark">Full Name:</strong> &nbsp;
                        Alec M. Thompson
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Mobile:</strong> &nbsp;
                        (44) 123 1234 123
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Email:</strong> &nbsp;
                        alecthompson@mail.com
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Location:</strong> &nbsp;
                        USA
                      </li>
                      <li className="list-group-item border-0 ps-0 pb-0">
                        <strong className="text-dark text-sm">Social:</strong>{" "}
                        &nbsp;
                        <a
                          className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                          href="javascript:;"
                        >
                          <i className="fab fa-facebook fa-lg" />
                        </a>
                        <a
                          className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter fa-lg" />
                        </a>
                        <a
                          className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                          href="javascript:;"
                        >
                          <i className="fab fa-instagram fa-lg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Conversations</h6>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group">
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                        <div className="avatar me-3">
                          <img
                            src="../assets/img/kal-visuals-square.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Sophie B.</h6>
                          <p className="mb-0 text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src="../assets/img/marie.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Anne Marie</h6>
                          <p className="mb-0 text-xs">
                            Awesome work, can you..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src="../assets/img/ivana-square.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Ivanna</h6>
                          <p className="mb-0 text-xs">About files I can..</p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div className="avatar me-3">
                          <img
                            src="../assets/img/team-4.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Peterson</h6>
                          <p className="mb-0 text-xs">
                            Have a great afternoon..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0">
                        <div className="avatar me-3">
                          <img
                            src="../assets/img/team-3.jpg"
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Nick Daniel</h6>
                          <p className="mb-0 text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="mb-5 ps-3">
                  <h6 className="mb-1">Projects</h6>
                  <p className="text-sm">Architects design houses</p>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div className="card card-blog card-plain">
                      <div className="card-header p-0 m-2">
                        <a className="d-block shadow-xl border-radius-xl">
                          <img
                            src="../assets/img/home-decor-1.jpg"
                            alt="img-blur-shadow"
                            className="img-fluid shadow border-radius-lg"
                          />
                        </a>
                      </div>
                      <div className="card-body p-3">
                        <p className="mb-0 text-sm">Project #2</p>
                        <a href="javascript:;">
                          <h5>Modern</h5>
                        </a>
                        <p className="mb-4 text-sm">
                          As Uber works through a huge amount of internal
                          management turmoil.
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm mb-0"
                          >
                            View Project
                          </button>
                          <div className="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-1.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Milly"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-2.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-3.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-4.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div className="card card-blog card-plain">
                      <div className="card-header p-0 m-2">
                        <a className="d-block shadow-xl border-radius-xl">
                          <img
                            src="../assets/img/home-decor-2.jpg"
                            alt="img-blur-shadow"
                            className="img-fluid shadow border-radius-lg"
                          />
                        </a>
                      </div>
                      <div className="card-body p-3">
                        <p className="mb-0 text-sm">Project #1</p>
                        <a href="javascript:;">
                          <h5>Scandinavian</h5>
                        </a>
                        <p className="mb-4 text-sm">
                          Music is something that every person has his or her
                          own specific opinion about.
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm mb-0"
                          >
                            View Project
                          </button>
                          <div className="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-3.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-4.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-1.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Milly"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-2.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div className="card card-blog card-plain">
                      <div className="card-header p-0 m-2">
                        <a className="d-block shadow-xl border-radius-xl">
                          <img
                            src="../assets/img/home-decor-3.jpg"
                            alt="img-blur-shadow"
                            className="img-fluid shadow border-radius-lg"
                          />
                        </a>
                      </div>
                      <div className="card-body p-3">
                        <p className="mb-0 text-sm">Project #3</p>
                        <a href="javascript:;">
                          <h5>Minimalist</h5>
                        </a>
                        <p className="mb-4 text-sm">
                          Different people have different taste, and various
                          types of music. Music is life.
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm mb-0"
                          >
                            View Project
                          </button>
                          <div className="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-4.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-3.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Milly"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-2.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-1.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div className="card card-blog card-plain">
                      <div className="card-header p-0 m-2">
                        <a className="d-block shadow-xl border-radius-xl">
                          <img
                            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="img-blur-shadow"
                            className="img-fluid shadow border-radius-lg"
                          />
                        </a>
                      </div>
                      <div className="card-body p-3">
                        <p className="mb-0 text-sm">Project #4</p>
                        <a href="javascript:;">
                          <h5>Gothic</h5>
                        </a>
                        <p className="mb-4 text-sm">
                          Why would anyone pick blue over pink? Pink is
                          obviously a better color.
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm mb-0"
                          >
                            View Project
                          </button>
                          <div className="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-4.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-3.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Milly"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-2.jpg"
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img
                                alt="Image placeholder"
                                src="../assets/img/team-1.jpg"
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



export default Profile
