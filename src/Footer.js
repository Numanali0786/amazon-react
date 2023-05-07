import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="page-footer">
      <p>
        &copy; <span id="date"></span>
        <span class="footer-logo">Amazon Clone</span> Built by
        <span className="footer__name"> Numan Ali</span>
      </p>
    </footer>
  );
};

export default Footer;
