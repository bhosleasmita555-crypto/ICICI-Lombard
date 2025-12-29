import React, { useState } from "react";
import testimonialsData from "../../Data/Testimonials.json";
import "./Testimonials.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const prevSlide = () => {
    setIndex(index === 0 ? testimonialsData.length - 2 : index - 2);
  };

  const nextSlide = () => {
    setIndex(index >= testimonialsData.length - 2 ? 0 : index + 2);
  };

  const toggleRead = (i) => {
    setExpanded((prev) => ({
      ...prev,
      [i]: !prev[i]
    }));
  };

  const left = testimonialsData[index] || {};
  const right = testimonialsData[index + 1] || {};

  const renderText = (item, i) => {
    if (!item.limit) return item.text;

    const isExpanded = expanded[i];
    return (
      <>
        {isExpanded ? item.text : item.text.slice(0, item.limit)}
        <span className="read-more" onClick={() => toggleRead(i)}>
          {isExpanded ? " less" : " Read more.."}
        </span>
      </>
    );
  };

  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>

      <div className="testimonial-container">
        <button className="nav left" onClick={prevSlide}>←</button>

        {/* Left testimonial */}
        <div className="testimonial-box">
          <h4>
            {left.name} <span>| {left.company}</span>
          </h4>
          <p>{renderText(left, index)}</p>
        </div>

        <div className="quote-icon">“ ”</div>

        {/* Right testimonial */}
        <div className={`testimonial-box ${right.bold ? "bold" : ""}`}>
          <h4>
            {right.name} <span>| {right.company}</span>
          </h4>
          <p>{renderText(right, index + 1)}</p>
        </div>

        <button className="nav right" onClick={nextSlide}>→</button>
      </div>

      {/* Dots */}
      <div className="dots">
        {Array.from({ length: testimonialsData.length / 2 }).map((_, i) => (
          <span
            key={i}
            className={index / 2 === i ? "dot active" : "dot"}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
