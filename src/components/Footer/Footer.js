import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className=" p-2 center">
      <h4>
        Made with <i className="fa-solid fa-heart fa-1x"></i> by Hamza Shaikh
      </h4>
      <div className="flex align-center justify-center">
        <a href="https://www.linkedin.com/in/shaikhhamza11" target="_blank">
          <i className="fa-brands fa-linkedin fa-3x m-3"></i>
        </a>
        <a href="https://github.com/shaikhhamza11" target="_blank">
          <i className="fa-brands fa-github fa-3x m-3"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
