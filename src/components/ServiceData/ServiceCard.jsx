import React from "react";

const ServiceCard = ({ icon, title, children }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>

      <h3 className="service-title">{title}</h3>

      <div className="service-text">{children}</div>
    </div>
  );
};

export default ServiceCard;
