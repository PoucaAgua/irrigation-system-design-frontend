import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class index extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <section id="footer">
          <footer className="py-3 my-8 bg-secondary">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link to="/" id="sub-text" className="nav-link px-2">
                  New project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" id="sub-text" className="nav-link px-2">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" id="sub-text" className="nav-link px-2">
                  Profile
                </Link>
              </li>
            </ul>
            <p className="text-center" id="sub-text">
              &copy; {currentYear} Pouca Água
            </p>
          </footer>
        </section>
      </>
    );
  }
}
