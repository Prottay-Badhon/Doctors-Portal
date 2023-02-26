import React from "react";
import footer from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      className=" p-10"
      style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <footer className="footer footer-center p-4  text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
