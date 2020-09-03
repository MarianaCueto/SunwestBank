import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
        <button className="link-button navbar-brand">
          <img
            src={require("../components/sunwest.png")}
            alt="logo"
            style={{ width: "250px" }}
          ></img>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button className="nav-link link-button">
                <NavLink to="/lending">Lending</NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link link-button">Log in</button>
            </li>
            <li className="nav-item">
              <button className="nav-link ">Log out</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
export default NavBar;
