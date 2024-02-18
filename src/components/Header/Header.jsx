import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assests/images/logo.png";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Materials",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: " Queries",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
 
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 style={{fontWeight:"bold"}}className=" d-flex align-items-center gap-1">
             <img src={logo} className="logoimg" alt="logo" style={{ width:'15%', height:'5%'}}/>LearnLoom
              
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
