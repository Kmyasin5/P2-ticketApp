// import React from "react";
import logo from "../assets/PP Logo.png";

const Header = () => {
  return (
    <div>
      {/* Header code */}
      <nav className="navbar navbar-expand-lg bg-body-secondary px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Users
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>

      {/* Footer code */}
      <footer className="foot fixed-bottom p-3 bg-body-secondary text-center">
        <div>
          © 2022 Copyright:
          <a
            className="text-dark ms-2"
            href="https://marketplace.atlassian.com/apps/1221131/terms-and-conditions-for-jira?tab=overview&hosting=datacenter"
          >
            TicketApp.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Header;
