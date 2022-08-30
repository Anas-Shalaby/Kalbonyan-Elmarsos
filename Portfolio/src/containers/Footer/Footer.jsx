import React, { useState } from "react";
import "./Footer.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Contact me</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="mail" />
          <a href="mailto:anasyoussef649@gmail.com" className="p-text">
            anasyoussef649@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+201011188416" className="p-text">
            +201011188416
          </a>
        </div>
      </div>
      <h2 className="head-text">
        <span>Thank you for contacting me.</span>
      </h2>

      <hr />

      <div className="app__social-links">
        <div>
          <div>
            <a
              href="https://www.linkedin.com/in/anas-youssef-29339b225/"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Anas-Shalaby?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/ansyoussef12"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <ul className="app__navbar-links footer-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppWrap(Footer, "contact");
