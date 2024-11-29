import React from "react";
import { useLocation } from "react-router-dom";

const List = ({ title, onClick, icon }) => {
    const path = useLocation
  return (
    <>
    <li className={title=="Account Pages" ? "nav-item mt-3":"nav-item"} onClick={onClick}>
        {title == "Account Pages"?
        <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-5">
        {title}
      </h6>
      :
      <p className="nav-link text-dark">
        <i className="material-symbols-rounded opacity-5">{icon}</i>
        <span className="nav-link-text ms-1">{title}</span>
      </p>
      }
      
    </li>   
    </>
  );
};

export default List;
