import React from 'react'
import mainLogo from "../Assets/img/logo-ct-dark.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import List from '../CommonComponents/List/List'

const Sidebar = () => {
    const navigate = useNavigate()
    const path = useLocation()
    console.log(path)
  return (
    <aside
    className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2"
    id="sidenav-main"
  >
    <div className="sidenav-header">
      <i
        className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      />
      <a
        className="navbar-brand px-4 py-3 m-0"
        href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
        target="_blank"
      >
        <img
          src={mainLogo}
          className="navbar-brand-img"
          width={26}
          height={26}
          alt="main_logo"
        />
        <span className="ms-1 text-sm text-dark">Creative Tim</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0 mb-2" />
    <div
      className="collapse navbar-collapse  w-auto "
      id="sidenav-collapse-main"
    >
      <ul className="navbar-nav">
        <List title="Dashboard" onClick={()=>navigate("/")} icon="dashboard"/>
        <List title="Tables" onClick={()=>navigate("/tables")} icon="table_view"/>
        <List title="Billing" onClick={()=>navigate("/billing")} icon="receipt_long"/>
        <List title="Virtual Reality" onClick={()=>navigate("/virtual-reality")} icon="view_in_ar"/>
        <List title="RTL" onClick={()=>navigate("/rtl")} icon="format_textdirection_r_to_l"/>
        <List title="Notifications" onClick={()=>navigate("/notifications")} icon="notifications"/>
        <List title="Account Pages"/>
        <List title="Profile" onClick={()=>navigate("/profile")} icon="person"/>
        <List title="Sign In" onClick={()=>navigate("/signin")} icon="login"/>
        <List title="Sign Up" onClick={()=>navigate("signup")} icon="assignment"/>
      </ul>
    </div>
    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
      <div className="mx-3">
        <Link
          className="btn btn-outline-dark mt-4 w-100"
          to="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree"
          type="button"
        >
          Documentation
        </Link>
        <Link
          className="btn bg-gradient-dark w-100"
          to="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
          type="button"
        >
          Upgrade to pro
        </Link>
      </div>
    </div>
  </aside>
  )
}

export default Sidebar