import React from "react";
import "./ServiceData.css";

import fire from "../../assets/fire.png";
import marine from "../../assets/marine2.png";
import engineering from "../../assets/engineering.png";

import ServiceCard from "./ServiceCard";

const ServiceData = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <ServiceCard icon={fire} title="Fire">
          <p>
            <span className="highlight">Fire insurance policy</span> covers
            damage and losses caused by fire and helps to cover the cost of
            replacement, repair or reconstruction of property.
          </p>
          <p>
            We offer 250+ occupancy types, value added services & can assess
            risk through remote video and provide a recommendation report.
          </p>
        </ServiceCard>

        <ServiceCard icon={marine} title="Marine">
          <p>
            We offer variety of value-added services and customized solutions
            in our marine insurance.
          </p>
          <p>
            Our vast experience in logistics planning and execution of Over
            Dimensional Consignments (ODC) across India makes us a trusted
            insurance partner.
          </p>
        </ServiceCard>

        <ServiceCard icon={engineering} title="Engineering">
          <p>
            Our customized and unique solutions drafted by our technical
            experts for various industries put us at the forefront of risk
            management.
          </p>
          <p>
            We continue to expand our footprint in this segment and provide
            value-added & risk management solutions to MSME, SME & corporate
            clients through technology driven platforms.
          </p>
        </ServiceCard>
      </div>
    </section>
  );
};

export default ServiceData;
