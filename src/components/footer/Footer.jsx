import React from "react";
import "./Footer.scss";
import { Person, Mail } from "@material-ui/icons";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="item-container">
          <p>@2021 - Website developed by Angel Samano Hamud</p>
        </div>
        <div className="social-icons">
          <div className="item-container">
            <a
              href="https://www.linkedin.com/in/angel-samano-hamud/"
              target="_blank"
              rel="noreferrer"
              className="icon1"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="item-container">
            <a
              href="https://github.com/An301290"
              target="_blank"
              rel="noreferrer"
              className="icon1"
            >
              <FaGithub />
            </a>
          </div>
          <div className="item-container">
            <a
              href="https://www.behance.net/gallery/113687199/Tattoon-App"
              target="_blank"
              rel="noreferrer"
              className="icon1"
            >
              <FaBehance />
            </a>
          </div>
        </div>
        <div className="item-container">
          <Person className="icon" />
          <span>+49 157 8808 5767</span>
        </div>
        <div className="item-container">
          <Mail className="icon" />
          <span>ansahamano@gmail.com</span>
        </div>
      </div>
    </div>
  );
}