import React from "react";
import "./WhatsNew.css";
import drone from "../../assets/whatsnew1.png";
import mobile from "../../assets/whatsnew2.png";
import business from "../../assets/whatsnew3.png";
import WhatsNewItem from "./WhatsNewItem";

const WhatsNew = () => { 
  return (
    <section className="whatsnew-section">
      <div className="whatsnew-grid">
        <WhatsNewItem
          img={drone}
          text="Drone insurance can be bought by – Drone manufacturers, Aircraft and Drone operators, Logistics start up and Aggregators"
        />
        <WhatsNewItem
          img={mobile}
          text="Mobile insurance offers protection against a number of perils and damages to the phone and covers the expenses relating to its repair as well as replacement"
        />
        <WhatsNewItem
          img={business}
          text="Business shield insurance includes Fire, Burglary, Loss of Profit, Legal Liability as a holistic package product"
        />
      </div>
    </section>
  );
};

export default WhatsNew;
