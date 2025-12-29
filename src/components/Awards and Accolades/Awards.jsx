import "./Awards.css";
import awards from "../../data/awards.json";

export default function Awards() {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Awards and Accolades</h2>

      <div className="awards-grid">
        {awards.map((item) => (
          <div className="award-card" key={item.id}>
            
            <div className="award-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="award-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
