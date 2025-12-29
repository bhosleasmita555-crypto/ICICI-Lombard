import React from "react";

const WhatsNewItem = ({ img, text }) => {
  return (
    <div className="whatsnew-item">
      <div className="whatsnew-image">
        <img src={img} alt="" />
      </div>

      {/* WHITE CARD */}
      <div className="whatsnew-card">
        <p>{text}</p>

        <button className="know-more-btn">Know More</button>

        <div className="call-link">
          📞 Have us call you
        </div>
      </div>
    </div>
  );
};

export default WhatsNewItem;
