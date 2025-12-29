import React from "react";
import "./Core.css";
import data from "../../Data/Core.json";

const CoreDifferentiators = () => {
  return (
    <section className="core-section">
      <h2 className="core-title">
        Core differentiators that define our business
      </h2>

      <div className="core-grid">
        {data.map((item) => (
          <div className="core-card" key={item.id}>
            <div className="core-icon">
              <img
                src={`/icons/Core/${item.icon}`}
                 alt={item.title}
/>

            </div>

            <p>
              {item.title} <br />
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreDifferentiators;
