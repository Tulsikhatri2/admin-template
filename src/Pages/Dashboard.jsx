import React from 'react'
import "../Assets/img/apple-icon.png"
import "../Assets/img/favicon.png"
import "../Assets/css/nucleo-icons.css"
import "../Assets/css/nucleo-svg.css"
import "../Assets/css/material-dashboard.css"
// import mainLogo from "../Assets/img/logo-ct-dark.png"
import logo from "../Assets/img/small-logos/logo-xd.svg"
import logo1 from "../Assets/img/small-logos/logo-atlassian.svg"
import logo2 from "../Assets/img/small-logos/logo-slack.svg"
import logo3 from "../Assets/img/small-logos/logo-spotify.svg"
import logo4 from "../Assets/img/small-logos/logo-jira.svg"
import logo5 from "../Assets/img/small-logos/logo-invision.svg"
import team1 from "../Assets/img/team-1.jpg"
import team2 from "../Assets/img/team-2.jpg"
import team3 from "../Assets/img/team-3.jpg"
import team4 from "../Assets/img/team-4.jpg"
import team5 from "../Assets/img/team-5.jpg"
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Dashboard = () => {
  return (
    <div>
  <Sidebar/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <Navbar pageTitle="Dashboard"/> 
    <div className="container-fluid py-2">
      <div className="row">
        <div className="ms-3">
          <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
          <p className="mb-4">
            Check the sales, value and bounce rate by country.
          </p>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-2 ps-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                  <h4 className="mb-0">$53k</h4>
                </div>
                <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                  <i className="material-symbols-rounded opacity-10">weekend</i>
                </div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-2 ps-3">
              <p className="mb-0 text-sm">
                <span className="text-success font-weight-bolder">+55% </span>
                than last week
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-2 ps-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                  <h4 className="mb-0">2300</h4>
                </div>
                <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                  <i className="material-symbols-rounded opacity-10">person</i>
                </div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-2 ps-3">
              <p className="mb-0 text-sm">
                <span className="text-success font-weight-bolder">+3% </span>
                than last month
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-2 ps-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-sm mb-0 text-capitalize">Ads Views</p>
                  <h4 className="mb-0">3,462</h4>
                </div>
                <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                  <i className="material-symbols-rounded opacity-10">
                    leaderboard
                  </i>
                </div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-2 ps-3">
              <p className="mb-0 text-sm">
                <span className="text-danger font-weight-bolder">-2% </span>than
                yesterday
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-2 ps-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-sm mb-0 text-capitalize">Sales</p>
                  <h4 className="mb-0">$103,430</h4>
                </div>
                <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                  <i className="material-symbols-rounded opacity-10">weekend</i>
                </div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-2 ps-3">
              <p className="mb-0 text-sm">
                <span className="text-success font-weight-bolder">+5% </span>
                than yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="mb-0 ">Website Views</h6>
              <p className="text-sm ">Last Campaign Performance</p>
              <div className="pe-2">
                <div className="chart">
                  <canvas
                    id="chart-bars"
                    className="chart-canvas"
                    height={170}
                    
                  />
                </div>
              </div>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-symbols-rounded text-sm my-auto me-1">
                  schedule
                </i>
                <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card ">
            <div className="card-body">
              <h6 className="mb-0 "> Daily Sales </h6>
              <p className="text-sm ">
               
                (<span className="font-weight-bolder">+15%</span>) increase in
                today sales.
              </p>
              <div className="pe-2">
                <div className="chart">
                  <canvas
                    id="chart-line"
                    className="chart-canvas"
                    height={170}
                  />
                </div>
              </div>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-symbols-rounded text-sm my-auto me-1">
                  schedule
                </i>
                <p className="mb-0 text-sm"> updated 4 min ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h6 className="mb-0 ">Completed Tasks</h6>
              <p className="text-sm ">Last Campaign Performance</p>
              <div className="pe-2">
                <div className="chart">
                  <canvas
                    id="chart-line-tasks"
                    className="chart-canvas"
                    height={170}
                  />
                </div>
              </div>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-symbols-rounded text-sm my-auto me-1">
                  schedule
                </i>
                <p className="mb-0 text-sm">just updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div className="card">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <h6>Projects</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true" />
                    <span className="font-weight-bold ms-1">30 done</span> this
                    month
                  </p>
                </div>
                <div className="col-lg-6 col-5 my-auto text-end">
                  <div className="dropdown float-lg-end pe-4">
                    <a
                      className="cursor-pointer"
                      id="dropdownTable"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v text-secondary" />
                    </a>
                    <ul
                      className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                      aria-labelledby="dropdownTable"
                    >
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Companies
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Members
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Budget
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Completion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo}
                              className="avatar avatar-sm me-3"
                              alt="xd"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">
                              Material XD Version
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Ryan Tompson"
                          >
                            <img src={team1} alt="team1" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Romina Hadid"
                          >
                            <img src={team2} alt="team2" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Alexander Smith"
                          >
                            <img src={team3} alt="team3" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Jessica Doe"
                          >
                            <img src={team4} alt="team4" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                         
                          $14,000
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                60%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info w-60"
                              role="progressbar"
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo1}
                              className="avatar avatar-sm me-3"
                              alt="atlassian"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Add Progress Track</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Romina Hadid"
                          >
                            <img src={team2} alt="team5" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Jessica Doe"
                          >
                            <img src={team4} alt="team6" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                         
                          $3,000
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                10%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info w-10"
                              role="progressbar"
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo2}
                              className="avatar avatar-sm me-3"
                              alt="team7"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">
                              Fix Platform Errors
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Romina Hadid"
                          >
                            <img src={team3} alt="team8" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Jessica Doe"
                          >
                            <img src={team1} alt="team9" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                          
                          Not set
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                100%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-success w-100"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo3}
                              className="avatar avatar-sm me-3"
                              alt="spotify"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">
                              Launch our Mobile App
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Ryan Tompson"
                          >
                            <img src={team4} alt="user1" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Romina Hadid"
                          >
                            <img src={team3} alt="user2" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Alexander Smith"
                          >
                            <img src={team4} alt="user3" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Jessica Doe"
                          >
                            <img src={team1} alt="user4" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                         
                          $20,500
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                100%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-success w-100"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo4}
                              className="avatar avatar-sm me-3"
                              alt="jira"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">
                              Add the New Pricing Page
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Ryan Tompson"
                          >
                            <img src={team4} alt="user5" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold"> $500 </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                25%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info w-25"
                              role="progressbar"
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={25}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={logo5}
                              className="avatar avatar-sm me-3"
                              alt="invision"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">
                              Redesign New Online Shop
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Ryan Tompson"
                          >
                            <img src={team1} alt="user6" />
                          </a>
                          <a
                            href="javascript:;"
                            className="avatar avatar-xs rounded-circle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Jessica Doe"
                          >
                            <img src={team4} alt="user7" />
                          </a>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                         
                          $2,000
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                40%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info w-40"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={40}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <div className="card-header pb-0">
              <h6>Orders overview</h6>
              <p className="text-sm">
                <i className="fa fa-arrow-up text-success" aria-hidden="true" />
                <span className="font-weight-bold">24%</span> this month
              </p>
            </div>
            <div className="card-body p-3">
              <div className="timeline timeline-one-side">
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-success text-gradient">
                      notifications
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      $2400, Design changes
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      22 DEC 7:20 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-danger text-gradient">
                      code
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New order #1832412
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      21 DEC 11 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-info text-gradient">
                      shopping_cart
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      Server payments for April
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      21 DEC 9:34 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-warning text-gradient">
                      credit_card
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New card added for order #4395133
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      20 DEC 2:20 AM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-primary text-gradient">
                      key
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      Unlock packages for development
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      18 DEC 4:54 AM
                    </p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="material-symbols-rounded text-dark text-gradient">
                      payments
                    </i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New order #9583120
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      17 DEC
                    </p>
                  </div>
                </div>
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
            <i className="fab fa-facebook-square me-1" aria-hidden="true" />
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

  )
}

export default Dashboard