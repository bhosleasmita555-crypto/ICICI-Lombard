import React from "react";
import "./BusinessInsurance.css";
import businessImg from "../../assets/business-insurance.png";

const BusinessInsurance = () => {
  return (
    <section className="business-insurance">
      <div className="business-container">

        {/* LEFT IMAGE */}
        <div className="business-image">
          <img src={businessImg} alt="Business Insurance" />
        </div>

        <div className="business-content">
  <h2>Business Insurance</h2>

  <p>
    Business insurance, also known as commercial insurance, helps protect business
    owners from unexpected losses. We offer different types of insurance for
    businesses, including coverage for property damage, legal liability and
    employee-related risks. No matter what industry you are in, your company
    faces risks every day. That’s why ICICI Lombard offers a wide range of
    business insurance covers, designed to identify and reduce those risks.
    Effective risk management is the key to a successful business. Our
    comprehensive commercial solutions are aimed at addressing the diverse
    risks faced by businesses.
  </p>
</div>


      </div>
    </section>
  );
};

export default BusinessInsurance;
