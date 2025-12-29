import React, { useState } from "react";
import "./TabSection.css";
import claimImg from "../../assets/Claim.png";
import innovationImg from "../../assets/Innovation.png";
import reinsuranceImg from "../../assets/Reinsurance.png";

const tabData = {
  claim: {
    title: "Claim Settlement",
    image: claimImg,
    content: (
      <>
        <p>
          ICICI Lombard has a remarkable claim settlement ratio in India and
          leverages Artificial Intelligence (AI) and advanced analytics for
          automated processing of Insurance claims.
        </p>

        <p>
          ICICI Lombard settles claims of up to Rs 5 Lakhs by MSMEs within
          10 days.
        </p>

        <p>
          It has pioneered the use of Artificial Intelligence and Machine
          Learning in health claim processing, reducing cashless claim
          request approval time to few minutes.
        </p>

        <p>
          In segments such as frequency driven marine cargo insurance claims
          portfolio, the company has introduced robotics to handle large
          number of claims and reduce turnaround time.
        </p>
      </>
    ),
  },

  innovation: {
    title: "Innovation",
    image: innovationImg,
    content: 
    <>
    <p>We customize our insurance solutions based on customer needs and by harnessing our
         technological capabilities.
    </p>


    <p> We use the latest technology tools to help you at all stages of your relationship 
        with us.  
    </p>

    <p>Our All-in-One insurance solutions like Business Shield and Enterprise Secure
         comprehensively cover all your key business risks.    
    </p>

     <p>Our value added services like Marine loss control solutions and anti-hijacking
         solutions help in preventing and mitigating risk incidents.
    </p>

    <p>We leverage natural processing and robotic process automation technology to 
        provide a superior digital experience to our customers.
    </p>
     </>
  },

  reinsurance: {
    title: "Reinsurance Capacity",
    image: reinsuranceImg,
    content: 
    <>
    <p>We have built one of the most robust Reinsurance capacities and have 
        expertise in structuring complex risks. We work with only stable and strong reinsurers which 
        enables us with a strong risk framework..
    </p>,
    </>
  },
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("claim");

  return (
    <section className="tabs-section">
      {/* Tabs */}
      <div className="tabs-header">
        {Object.keys(tabData).map((key) => (
          <button
            key={key}
            className={`tab-btn ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {tabData[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tabs-content">
        <div className="content-left">
          <img src={tabData[activeTab].image} alt="tab visual" />
        </div>

        <div className="content-right">
          {tabData[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
