import React from "react";
import "./OurNetwork.css";
import networkData from "../../Data/ourNetwork.json";

const OurNetwork = () => {
  return (
    <section className="network-section">
      <h2 className="network-title">Our network</h2>

      <div className="network-grid">
        {networkData.map((item) => (
          <div className="network-card" key={item.id}>
            <div className="network-icon">
              <img
                src={new URL(`../../assets/${item.icon}`, import.meta.url).href}
                alt={item.label}
              />
            </div>

            <h3 className={item.highlight ? "highlight" : ""}>
              {item.count}
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNetwork;
