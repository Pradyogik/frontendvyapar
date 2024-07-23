import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("");
  const [blurNavbar , setBlurNavbar] = useState(false)
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const handleBlurHeader = ()=>{
    if(window.scrollY >= 100){
      setBlurNavbar(true)
      console.log(window.scrollY);
    }
    else{
      setBlurNavbar(false)
    }
  }

  window.addEventListener('scroll' , handleBlurHeader)

  return (
    <div className={`headerContainer container-fluid p-0 sticky-top ${blurNavbar ? 'blurHeader' : ''} `}>
      <nav className="navbar navbar-expand-lg headerNavbar navbar-light">
        <a className="navbar-brand ml-5 p-0 mr-0" href="#">
         <p>Vya<span>par</span> Launch<span>pad</span></p> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className={`nav-item ${active === "/" ? "active" : ""}`}>
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setActive("/")}
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${active === "/about" ? "active" : ""}`}>
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setActive("/about")}
              >
                About
              </NavLink>
            </li>
            <li
              className={`nav-item ${active === "/pricing" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link"
                to="/pricing"
                onClick={() => setActive("/pricing")}
              >
                Pricing
              </NavLink>
            </li>

            <li
              className={`nav-item ${active === "/try" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link"
                to="/try"
                onClick={() => setActive("/try")}
              >
                
                Try Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(Header);
