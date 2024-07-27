import React from "react";
import logo from "../assets/mainIcon.png";
import people from "../assets/people.png";
import { Link } from "react-router-dom";
import Shery from "sheryjs";

import "../styles/header.scss"

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  duration: 1,
});

function Links({info}) {
  return (
    <>
      <li>
        <Link to={info} className="magnet">{info}</Link>
      </li>
    </>
  );
}

const Header = () => {
  return (
    <>
      <header>
        <div className="logo magnet">
          <img src={logo} alt="" />
        </div>
        <div className="stats">
          <img src={people} alt="" className="magnet" />
          <span className="magnet">100 active events</span>
        </div>
        <nav>
          <ul>
            <Links info="home" />
            <Links info="events" />
            <Links info="companies" />
            <Links info="about" />
          </ul>
        </nav>
        <div className="searchIcon">
          <i class="ri-search-line"></i>
          <label htmlFor="input"></label>
          <input type="text" id="input" placeholder="Search" className="input magnet" />
        </div>
      </header>
    </>
  );
};

export default Header;
