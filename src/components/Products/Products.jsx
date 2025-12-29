import { useEffect, useState } from "react";
import "./products.css";

/* ICON IMPORTS */
import marineSingle from "../../assets/marine-single-transit.png";
import marineOpen from "../../assets/marine-open-insurance.png";
import empComp from "../../assets/employees-compensation.png";
import fire from "../../assets/fire-insurance.png";
import groupHealth from "../../assets/group-health-insurance.png";
import contractor from "../../assets/contractors.png";
import professional from "../../assets/professional-indemnity.png";
import drone from "../../assets/drone_widget.svg";
import event from "../../assets/event_widget.svg";

/* PROMO IMAGES */
import promo1 from "../../assets/ad-1.png";
import promo2 from "../../assets/ad2.jpg";
import promo3 from "../../assets/ad-3.png";

const Products = () => {
  const promoImages = [promo1, promo2, promo3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="product-section">
      <div className="product-container">

        {/* LEFT SIDE */}
        <div className="product-left">
          <div className="product-title">
            Select from our wide range of Business Insurance Products
          </div>

          <div className="product-wrapper">
            <div className="product-grid">

              <div className="product-card">
                <img src={marineSingle} alt="Marine Single Transit" />
                Marine Single Transit
              </div>

              <div className="product-card">
                <img src={marineOpen} alt="Marine Open Insurance" />
                Marine Open Insurance
              </div>

              <div className="product-card">
                <img src={empComp} alt="Employees Compensation" />
                Employee&apos;s Compensation
              </div>

              <div className="product-card">
                <img src={fire} alt="Fire Insurance" />
                Fire Insurance
              </div>

              <div className="product-card">
                <img src={groupHealth} alt="Group Health Insurance" />
                Group Health Insurance
              </div>

              <div className="product-card">
                <img src={contractor} alt="Contractors All Risk" />
                Contractor&apos;s All Risk
              </div>

              <div className="product-card">
                <img src={professional} alt="Professional Indemnity" />
                Professional Indemnity
              </div>

              <div className="product-card">
                <img src={drone} alt="Drone Insurance" />
                Drone Insurance <span className="product-tag">New</span>
              </div>

              <div className="product-card">
                <img src={event} alt="Event Insurance" />
                Event Insurance <span className="product-tag">New</span>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE – PROMO SLIDER */}
        <div className="product-right">
          <div className="promo-slider">
            <div className="promo-track">
              <img
                src={promoImages[currentSlide]}
                alt={`Promo ${currentSlide + 1}`}
              />
            </div>

            <div className="promo-dots">
              {promoImages.map((_, index) => (
                <span
                  key={index}
                  className={currentSlide === index ? "active" : ""}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
