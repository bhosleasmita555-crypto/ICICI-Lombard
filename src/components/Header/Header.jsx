import React from "react";
import { FaArrowRight } from "react-icons/fa";


import "./header.css";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { openLogin } from "../../redux/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header-wrapper">
      
      {/* TOP BAR */}
      <div className="topbar">
        <div>
          📧 businessinsurance@icicilombard.com &nbsp;&nbsp; 📞 1800 2666
        </div>

        <div className="top-right">
          <span>Become an Agent</span>
          <span>Renewal</span>
          <span>Support</span>

          <button
            className="login-btn"
          onClick={() => dispatch(openLogin())}
          >
            Login <FaArrowRight className="login-arrow" />
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar />
    </header>
  );
}










