import React from "react";
import "./Footer.css";
import footerData from "../../data/footer.json";
import { Link } from "react-router-dom";

const footerRoutes = {
  "Privacy Policy": "/privacy-policy",
  "Sitemap": "/sitemap",
  "Become an Agent": "/become-agent",
  "Blogs on Business Insurance": "/blogs",
  "Contact Us": "/address"
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            {footerData.products.map((item, i) => (
              <li key={i}>
                <Link to={footerRoutes[item] || "/"}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {footerData.services.map((item, i) => (
              <li key={i}>
                <Link to={footerRoutes[item] || "/"}>{item}</Link>
              </li>
            ))}
          </ul>

          <h4 className="mt">Legal</h4>
          <ul>
            {footerData.legal.map((item, i) => (
              <li key={i} className="highlight">
                <Link to={footerRoutes[item]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Others</h4>
          <ul>
            {footerData.others.map((item, i) => (
              <li key={i}>
                <Link to={footerRoutes[item]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
