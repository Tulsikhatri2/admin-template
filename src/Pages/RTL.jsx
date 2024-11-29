import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RTL = () => {
  return (
    <>
      <div>
        <Sidebar/>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden">
          <Navbar pageTitle="RTL"/>
          <div className="container-fluid py-2">
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3 pt-2">
                    <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg">
                      <i className="material-symbols-rounded opacity-10">
                        weekend
                      </i>
                    </div>
                    <div className="text-start pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        أموال اليوم
                      </p>
                      <h4 className="mb-0">$53k</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0 text-start">
                      <span className="text-success text-sm font-weight-bolder ms-1">
                        +55%{" "}
                      </span>
                      من الأسبوع الماضي
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3 pt-2">
                    <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg">
                      <i className="material-symbols-rounded opacity-10">
                        leaderboard
                      </i>
                    </div>
                    <div className="text-start pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        مستخدمو اليوم
                      </p>
                      <h4 className="mb-0">2,300</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0 text-start">
                      <span className="text-success text-sm font-weight-bolder ms-1">
                        +33%{" "}
                      </span>
                      من الأسبوع الماضي
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3 pt-2">
                    <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg">
                      <i className="material-symbols-rounded opacity-10">
                        store
                      </i>
                    </div>
                    <div className="text-start pt-1">
                      <p className="text-sm mb-0 text-capitalize">عملاء جدد</p>
                      <h4 className="mb-0">
                        <span className="text-danger text-sm font-weight-bolder ms-1">
                          -2%
                        </span>
                        +3,462
                      </h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0 text-start">
                      <span className="text-success text-sm font-weight-bolder ms-1">
                        +5%{" "}
                      </span>
                      من الشهر الماضي
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3 pt-2">
                    <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg">
                      <i className="material-symbols-rounded opacity-10">
                        weekend
                      </i>
                    </div>
                    <div className="text-start pt-1">
                      <p className="text-sm mb-0 text-capitalize">مبيعات</p>
                      <h4 className="mb-0">$103,430</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0 text-start">
                      <span className="text-success text-sm font-weight-bolder ms-1">
                        +7%{" "}
                      </span>
                      مقارنة بيوم أمس
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h6 className="mb-0 ">مشاهدات الموقع</h6>
                    <p className="text-sm ">آخر أداء للحملة</p>
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
                      <i className="material-symbols-rounded text-sm my-auto ms-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm">لحملة أرسلت قبل يومين </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h6 className="mb-0 ">المبيعات اليومية</h6>
                    <p className="text-sm ">
                      (
                      <span className="font-weight-bolder text-success">
                        +15%
                      </span>
                      ) زيادة في مبيعات اليوم
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
                      <i className="material-symbols-rounded text-sm my-auto ms-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm">لحملة أرسلت قبل يومين </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h6 className="mb-0 ">المهام المكتملة</h6>
                    <p className="text-sm ">آخر أداء للحملة</p>
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
                      <i className="material-symbols-rounded text-sm my-auto ms-1">
                        schedule
                      </i>
                      <p className="mb-0 text-sm">تم تحديثه للتو</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                <div className="card">
                  <div className="card-header pb-0">
                    <div className="row mb-3">
                      <div className="col-6">
                        <h6>المشاريع</h6>
                        <p className="text-sm">
                          <i
                            className="fa fa-check text-info"
                            aria-hidden="true"
                          />
                          <span className="font-weight-bold ms-1">
                            30 انتهى
                          </span>{" "}
                          هذا الشهر
                        </p>
                      </div>
                      <div className="col-6 my-auto text-start">
                        <div className="dropdown float-start ps-4">
                          <a
                            className="cursor-pointer"
                            id="dropdownTable"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v text-secondary" />
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end px-2 py-3 me-n4"
                            aria-labelledby="dropdownTable"
                          >
                            <li>
                              <a
                                className="dropdown-item border-radius-md"
                                href="javascript:;"
                              >
                                عمل
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item border-radius-md"
                                href="javascript:;"
                              >
                                عمل آخر
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item border-radius-md"
                                href="javascript:;"
                              >
                                شيء آخر هنا
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 pb-2">
                    <div className="table-responsive">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              المشروع
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              أعضاء
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              ميزانية
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              إكمال
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/small-logos/logo-xd.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    Material XD الإصدار
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
                                  title="Romina Hadid"
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
                                  title="Alexander Smith"
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
                                  title="Jessica Doe"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                $14,000{" "}
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
                                    src="../assets/img/small-logos/logo-atlassian.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    أضف مسار التقدم إلى التطبيق الداخلي
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
                                  title="Jessica Doe"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                $3,000{" "}
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
                                    src="../assets/img/small-logos/logo-slack.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    إصلاح أخطاء النظام الأساسي
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
                                  title="Jessica Doe"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                غير مضبوط{" "}
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
                                    src="../assets/img/small-logos/logo-spotify.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    إطلاق تطبيق الهاتف المحمول الخاص بنا
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
                                  title="Romina Hadid"
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
                                  title="Alexander Smith"
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
                                  title="Jessica Doe"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                $20,500{" "}
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
                                    src="../assets/img/small-logos/logo-jira.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    أضف صفحة التسعير الجديدة
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
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                $500{" "}
                              </span>
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
                                    src="../assets/img/small-logos/logo-invision.svg"
                                    className="avatar avatar-sm ms-3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    إعادة تصميم متجر جديد على الإنترنت
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
                                  title="Jessica Doe"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="text-xs font-weight-bold">
                                {" "}
                                $2,000{" "}
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
                    <h6>نظرة عامة على الطلبات</h6>
                    <p className="text-sm">
                      <i
                        className="fa fa-arrow-up text-success"
                        aria-hidden="true"
                      />
                      <span className="font-weight-bold">24%</span> هذا الشهر
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
                            $2400, تغييرات في التصميم
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
                            طلب جديد #1832412
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
                            مدفوعات الخادم لشهر أبريل
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
                            تمت إضافة بطاقة جديدة للطلب #4395133
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
                            فتح الحزم من أجل التطوير
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
                            طلب جديد #9583120
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
              <div className="float-end">
                <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                <p>See our dashboard options.</p>
              </div>
              <div className="float-start mt-4">
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
                <div className="badge-colors my-2 text-end">
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
                  className="btn bg-gradient-dark px-3 mb-2  active me-2"
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
                <div className="form-check form-switch me-auto my-auto">
                  <input
                    className="form-check-input mt-1 float-end me-auto"
                    type="checkbox"
                    id="navbarFixed"
                    onclick="navbarFixed(this)"
                  />
                </div>
              </div>
              <hr className="horizontal dark my-3" />
              <div className="mt-2 d-flex">
                <h6 className="mb-0">Light / Dark</h6>
                <div className="form-check form-switch me-auto my-auto">
                  <input
                    className="form-check-input mt-1 float-end me-auto"
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

export default RTL;
