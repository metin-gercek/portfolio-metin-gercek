import React, { Component } from "react";



export default class Navi extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Portfolio Metin Gercek
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <a className="nav-link" href="/form1">
                    React
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Angular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    JavaScript
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
