import React from "react";
import "./navbar.css";
import { FaAngleDown } from "react-icons/fa";

const menuData = [
  {
    title: "Employee Benefit",
    items: ["Group Health Insurance", "Workmen Compensation", "Corporate Health"],
  },
  {
    title: "Marine Insurance",
    items: ["Marine Transit", "Marine Open Policy"],
  },
  {
    title: "Property Insurance",
    items: ["Fire Insurance", "Office Package", "Contractor All Risk"],
  },
  {
    title: "Liability Insurance",
    items: ["Professional Indemnity", "Cyber Insurance"],
  },
  {
    title: "Engineering Insurance",
    items: ["Contractor Plant Machinery", "Electronic Equipment"],
  },
  {
    title: "Other Insurance",
    items: ["Shop Insurance", "Event Insurance"],
  },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <img src="/il-logo.png" alt="Logo" className="logo" />

      {/* MENU */}
      <ul className="nav-menu">
        {menuData.map((menu, index) => (
          <li className="menu-item" key={index}>
            {menu.title}
            <FaAngleDown className="arrow" />
            
            <div className="dropdown">
              {menu.items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      
    </nav>
  );
}
