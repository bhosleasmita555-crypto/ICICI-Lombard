import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-section">
      {/* Heading */}
      <h2 className="why-title">Why choose ICICI Lombard</h2>

      <p className="why-subtitle">
        ICICI Lombard is one of the Leading General Insurance Company in Private
        sector.{" "}
        <a href="/" className="why-link">
          Financial Highlights FY 2023
        </a>
      </p>

      {/* Stats */}
      <div className="why-stats">
        <div className="stat-box">
          <h3>₹217.72 Billion</h3>
          <p>Gross Written Premium</p>
        </div>

        <div className="stat-box">
          <h3>32.7 Million</h3>
          <p>Count of Policies issued</p>
        </div>

        <div className="stat-box">
          <h3>3.6 Million</h3>
          <p>Count of Claims settled</p>
        </div>
      </div>

     </section>
  );
};

export default WhyChoose;
